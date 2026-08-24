import { brand } from "@/lib/site-data";
import { CareersFormPayload } from "@/types/Types";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderList(items: string[] | undefined, emptyLabel: string): string {
  if (!items || items.length === 0) {
    return `<span style="color:#8b95a6;font-weight:600;">${emptyLabel}</span>`;
  }
  return items
    .map(
      (item) => `
        <span style="display:inline-block;background:#eef1fb;color:#07162b;border:1px solid #d9deea;border-radius:999px;padding:5px 12px;font-size:13px;font-weight:600;margin:0 6px 6px 0;">
          ${escapeHtml(item)}
        </span>`
    )
    .join("");
}

export const careerEmailTemplate = (data: CareersFormPayload): string => {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phoneNumber = escapeHtml(data.phoneNumber);
  const country = escapeHtml(data.country);
  const experience = escapeHtml(data.experience);
  const portfolio = data.portfolio ? escapeHtml(data.portfolio) : "Not provided";
  const role = escapeHtml(data.role);
  const compensationPreference = escapeHtml(data.compensationPreference);
  const reasonForJoining = escapeHtml(data.reasonForJoining);

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New ${brand.name} Career Application</title>
    </head>
    <body style="margin:0;padding:0;background:#eaf1ff;font-family:Arial,Helvetica,sans-serif;color:#07162b;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#eaf1ff;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="width:100%;max-width:640px;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #d9deea;box-shadow:0 18px 40px rgba(8,36,61,0.12);">
              <tr>
                <td style="background:#91388b;padding:34px 38px;color:#ffffff;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                        <p style="margin:0 0 12px;font-size:12px;letter-spacing:2px;text-transform:uppercase;color:#d9f99d;font-weight:700;">
                          ${brand.name}
                        </p>
                        <h1 style="margin:0;font-size:30px;line-height:1.15;font-weight:800;">
                          New career / partnership application
                        </h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:34px 38px 18px;">
                  <p style="margin:0;color:#596171;font-size:16px;line-height:1.7;">
                    Someone submitted the careers form to join as a <strong>${role}</strong>.
                    Review the details below and reply directly to the sender to continue the conversation.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding:0 38px 30px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 12px;">
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Name
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        ${name}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Email
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        <a href="mailto:${email}" style="color:#0f6474;text-decoration:none;">${email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Phone
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        <a href="tel:${phoneNumber}" style="color:#0f6474;text-decoration:none;">${phoneNumber}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Country
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        ${country}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Role
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        ${role}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Experience
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        ${experience}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Compensation
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        ${compensationPreference}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Portfolio <span style="color:#8b95a6;font-weight:700;text-transform:none;letter-spacing:0;">(optional)</span>
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:${data.portfolio ? "#07162b" : "#596171"};">
                        ${data.portfolio ? `<a href="${portfolio}" style="color:#0f6474;text-decoration:none;">${portfolio}</a>` : portfolio}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Skills
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;color:#07162b;">
                        ${renderList(data.skills, "Not provided")}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Projects interested
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;color:#07162b;">
                        ${renderList(data.projectsIntrested, "Not provided")}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:0 38px 38px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#08243d;border-radius:10px;overflow:hidden;">
                    <tr>
                      <td style="padding:22px 24px;border-left:6px solid #8dc63f;">
                        <p style="margin:0 0 10px;color:#d9f99d;font-size:12px;font-weight:800;letter-spacing:1.8px;text-transform:uppercase;">
                          Reason for joining
                        </p>
                        <p style="margin:0;color:#ffffff;font-size:16px;line-height:1.75;white-space:pre-line;">
                          ${reasonForJoining}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:24px 38px;background:#f5f7fd;border-top:1px solid #d9deea;">
                  <p style="margin:0;color:#596171;font-size:13px;line-height:1.6;">
                    Suggested next step: review the applicant's background and reach out to schedule
                    an introductory conversation.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};