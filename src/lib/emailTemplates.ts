export function getUserConfirmationEmailHtml({
  name,
  company,
  projectType,
  message,
}: {
  name: string;
  company?: string;
  projectType?: string;
  message: string;
}) {
  const formattedCompany = company ? company : "Not specified";
  const formattedProject = projectType ? projectType : "General Inquiry";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Contacting ShaniAI Agency</title>
</head>
<body style="margin:0; padding:12px; background-color:#f4f4f6; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#18181b; -webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:560px; margin:0 auto; background-color:#ffffff; border-radius:12px; border:1px solid #e4e4e7; overflow:hidden;">
    
    <!-- Compact Dark Header -->
    <tr>
      <td style="padding:16px 20px; background-color:#09090b; text-align:left;">
        <table role="presentation" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td style="width:28px; height:28px; background-color:#ffd02f; border-radius:6px; text-align:center; vertical-align:middle; font-weight:bold; font-size:14px; color:#09090b;">S</td>
            <td style="padding-left:10px; font-size:16px; font-weight:bold; color:#ffffff; letter-spacing:-0.3px;">ShaniAI Agency</td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding:20px 20px 16px 20px;">
        <h1 style="margin:0 0 10px 0; font-size:20px; font-weight:600; color:#09090b; line-height:1.25;">Thank you for contacting us, ${name}.</h1>
        <p style="margin:0 0 16px 0; font-size:14px; color:#52525b; line-height:1.5;">We have received your project inquiry. Our engineering leadership team will review your requirements and get back to you within 24 hours.</p>

        <!-- Submission Summary Box -->
        <div style="background-color:#f8f9fa; border:1px solid #e4e4e7; border-radius:8px; padding:14px 16px; margin-bottom:16px;">
          <div style="font-size:11px; font-weight:bold; text-transform:uppercase; color:#71717a; letter-spacing:0.5px; margin-bottom:10px; border-bottom:1px solid #e4e4e7; padding-bottom:6px;">Summary of Your Submission</div>
          
          <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:13px; color:#27272a;">
            <tr>
              <td style="padding:4px 0; color:#71717a; width:100px; font-weight:500;">Name:</td>
              <td style="padding:4px 0; font-weight:600; color:#09090b;">${name}</td>
            </tr>
            <tr>
              <td style="padding:4px 0; color:#71717a; font-weight:500;">Company:</td>
              <td style="padding:4px 0;">${formattedCompany}</td>
            </tr>
            <tr>
              <td style="padding:4px 0; color:#71717a; font-weight:500;">Project Type:</td>
              <td style="padding:4px 0;">${formattedProject}</td>
            </tr>
            <tr>
              <td style="padding:8px 0 4px 0; color:#71717a; font-weight:500; vertical-align:top;" colspan="2">
                <div style="margin-bottom:4px;">Message:</div>
                <div style="background-color:#ffffff; border:1px solid #e4e4e7; border-radius:6px; padding:10px; font-size:13px; color:#09090b; line-height:1.4;">${message}</div>
              </td>
            </tr>
          </table>
        </div>

        <!-- Next Steps -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#09090b; border-radius:8px; margin-bottom:16px;">
          <tr>
            <td style="padding:14px 16px; color:#ffffff;">
              <div style="font-size:12px; font-weight:bold; color:#ffd02f; text-transform:uppercase; letter-spacing:0.5px; margin-bottom:4px;">What Happens Next?</div>
              <div style="font-size:13px; color:#e4e4e7; line-height:1.4;">Founder &amp; CEO Soham Pawar and our senior engineers will evaluate your requirements and reach out directly to align on technical scope and timeline.</div>
            </td>
          </tr>
        </table>

        <!-- Direct Contact Line -->
        <p style="margin:0; font-size:13px; color:#71717a; line-height:1.5;">If you need urgent assistance, call us directly at <a href="tel:+918087167841" style="color:#4262ff; text-decoration:none; font-weight:bold;">+91 80871 67841</a> or email <a href="mailto:soham@shaniaiagency.tech" style="color:#4262ff; text-decoration:none; font-weight:bold;">soham@shaniaiagency.tech</a>.</p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="padding:14px 20px; background-color:#fafafa; border-top:1px solid #e4e4e7; font-size:12px; color:#a1a1aa; text-align:center;">
        &copy; ${new Date().getFullYear()} ShaniAI Agency. All rights reserved.
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export function getAdminNotificationEmailHtml({
  name,
  email,
  phone,
  company,
  projectType,
  message,
  createdAt,
}: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  message: string;
  createdAt: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Project Inquiry Lead - ShaniAI Agency</title>
</head>
<body style="margin:0; padding:12px; background-color:#f4f4f6; font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#18181b; -webkit-text-size-adjust:100%;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:560px; margin:0 auto; background-color:#ffffff; border-radius:12px; border:1px solid #e4e4e7; overflow:hidden;">
    
    <!-- Alert Header -->
    <tr>
      <td style="padding:14px 20px; background-color:#4262ff; color:#ffffff; text-align:left;">
        <div style="font-size:11px; font-weight:bold; text-transform:uppercase; letter-spacing:0.5px; opacity:0.9;">ShaniAI Lead Alert</div>
        <div style="font-size:17px; font-weight:bold; margin-top:2px;">New Project Inquiry Submitted</div>
      </td>
    </tr>

    <!-- Lead Detail Card -->
    <tr>
      <td style="padding:20px;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size:14px; color:#27272a;">
          <tr>
            <td style="padding:6px 0; color:#71717a; width:110px; font-weight:500;">Client Name:</td>
            <td style="padding:6px 0; font-weight:bold; color:#09090b;">${name}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; color:#71717a; font-weight:500;">Email:</td>
            <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#4262ff; font-weight:bold; text-decoration:none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding:6px 0; color:#71717a; font-weight:500;">Phone:</td>
            <td style="padding:6px 0;">${phone ? `<a href="tel:${phone}" style="color:#4262ff; text-decoration:none;">${phone}</a>` : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; color:#71717a; font-weight:500;">Company:</td>
            <td style="padding:6px 0;">${company ? company : "Not provided"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; color:#71717a; font-weight:500;">Project Type:</td>
            <td style="padding:6px 0; font-weight:600;">${projectType ? projectType : "General Inquiry"}</td>
          </tr>
          <tr>
            <td style="padding:6px 0; color:#71717a; font-weight:500;">Submitted At:</td>
            <td style="padding:6px 0; font-size:12px; color:#71717a;">${createdAt}</td>
          </tr>
        </table>

        <!-- Message Box -->
        <div style="margin-top:16px; background-color:#f8f9fa; border:1px solid #e4e4e7; border-radius:8px; padding:14px;">
          <div style="font-size:11px; font-weight:bold; text-transform:uppercase; color:#71717a; letter-spacing:0.5px; margin-bottom:6px;">Project Message:</div>
          <div style="font-size:14px; color:#09090b; line-height:1.5; white-space:pre-wrap;">${message}</div>
        </div>

        <!-- Quick Reply Action Button -->
        <div style="margin-top:20px; text-align:center;">
          <a href="mailto:${email}?subject=Re:%20ShaniAI%20Agency%20Project%20Inquiry" style="display:inline-block; background-color:#09090b; color:#ffffff; font-weight:bold; font-size:14px; text-decoration:none; padding:12px 24px; border-radius:30px;">Reply to ${name} &rarr;</a>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
