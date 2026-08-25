const DEFAULT_OWNER = "sohampawar1866";
const API_BASE = "https://api.github.com";

function parseArgs(argv) {
  const args = { owner: DEFAULT_OWNER, apply: false };
  for (const arg of argv) {
    if (arg === "--apply") {
      args.apply = true;
      continue;
    }
    if (arg.startsWith("--owner=")) {
      args.owner = arg.slice("--owner=".length).trim() || DEFAULT_OWNER;
    }
  }
  return args;
}

function toTitleCase(value) {
  const acronyms = new Set(["ai", "api", "cli", "sdk", "ui", "ux", "ml", "llm"]);
  return value
    .replace(/[_-]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      if (acronyms.has(lower)) {
        return lower.toUpperCase();
      }
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(" ");
}

function buildDescription(repo) {
  const subject = toTitleCase(repo.name);
  const context = [repo.name, repo.description, ...(repo.topics || []), repo.language]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  let description = `Source code for ${subject}.`;
  if (/(website|web|frontend|landing|nextjs|next\.js)/.test(context)) {
    description = `Official website and web experience for ${subject}.`;
  } else if (/(portfolio|resume|showcase)/.test(context)) {
    description = `Portfolio project showcasing ${subject}.`;
  } else if (/(api|backend|server)/.test(context)) {
    description = `Backend API service for ${subject}.`;
  } else if (/(bot|automation|agent)/.test(context)) {
    description = `Automation and agent workflows for ${subject}.`;
  } else if (/(template|starter|boilerplate|scaffold)/.test(context)) {
    description = `Starter template for ${subject} projects.`;
  } else if (/(dashboard|admin)/.test(context)) {
    description = `Admin dashboard for ${subject}.`;
  } else if (/(mobile|android|ios|react-native|flutter)/.test(context)) {
    description = `Mobile application for ${subject}.`;
  } else if (/(library|sdk|package|utils)/.test(context)) {
    description = `Reusable library and tooling for ${subject}.`;
  } else if (/(docs|documentation)/.test(context)) {
    description = `Documentation and guides for ${subject}.`;
  }

  if (repo.language && !description.includes(`Built with ${repo.language}`)) {
    description = `${description} Built with ${repo.language}.`;
  }

  if (description.length > 160) {
    description = description.replace(/\s+Built with .+?\.$/, ".");
  }
  if (description.length > 160) {
    description = `${description.slice(0, 157).trimEnd()}...`;
  }
  return description;
}

async function githubRequest(path, { method = "GET", body, token }) {
  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: ["Bearer", token].join(" "),
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`GitHub API ${method} ${path} failed (${response.status}): ${text}`);
  }

  return response.json();
}

async function listOwnerRepos(owner, token) {
  const repos = [];
  for (let page = 1; ; page += 1) {
    const pageRepos = await githubRequest(
      `/users/${owner}/repos?type=owner&sort=full_name&per_page=100&page=${page}`,
      { token }
    );
    repos.push(...pageRepos);
    if (pageRepos.length < 100) {
      break;
    }
  }
  return repos;
}

async function main() {
  const { owner, apply } = parseArgs(process.argv.slice(2));
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("Missing GITHUB_TOKEN. Export a token with repo metadata write access.");
  }

  const repos = await listOwnerRepos(owner, token);
  const ownedNonForkRepos = repos.filter((repo) => !repo.fork);

  console.log(`Found ${repos.length} owned repositories (${ownedNonForkRepos.length} non-forks).`);

  for (const repo of ownedNonForkRepos) {
    const nextDescription = buildDescription(repo);
    const currentDescription = (repo.description || "").trim();
    const shouldUpdate = currentDescription !== nextDescription;

    if (!shouldUpdate) {
      console.log(`= ${repo.full_name}: already up to date`);
      continue;
    }

    if (!apply) {
      console.log(`~ ${repo.full_name}`);
      console.log(`  from: ${currentDescription || "(empty)"}`);
      console.log(`  to:   ${nextDescription}`);
      continue;
    }

    await githubRequest(`/repos/${owner}/${repo.name}`, {
      method: "PATCH",
      token,
      body: { description: nextDescription },
    });

    console.log(`✓ ${repo.full_name}: updated description`);
  }

  if (!apply) {
    console.log("\nDry run completed. Re-run with --apply to persist changes.");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
