import { createClient, Client } from "@libsql/client";

let dbClient: Client | null = null;

export function getTursoClient(): Client {
  if (dbClient) return dbClient;

  const url = process.env.TURSO_DATABASE_URL || "file:local.db";
  const authToken = process.env.TURSO_AUTH_TOKEN || undefined;

  dbClient = createClient({
    url,
    authToken,
  });

  return dbClient;
}

/**
 * Ensures table structure exists in Turso / SQLite
 */
export async function initContactTable() {
  const db = getTursoClient();
  await db.execute(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      phone TEXT,
      project_type TEXT,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
  `);
}
