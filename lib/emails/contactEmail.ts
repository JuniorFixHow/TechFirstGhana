import { brand } from "@/lib/site-data";
import { ContactFormPayload } from "@/types/Types";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const contactEmailTemplate = (data: ContactFormPayload): string => {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phoneNumber = escapeHtml(data.phoneNumber);
  const company = data.company ? escapeHtml(data.company) : "Not provided";
  const serviceType = escapeHtml(data.serviceType);
  const message = escapeHtml(data.message);

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New ${brand.name} Website Inquiry</title>
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
                          New strategic technology inquiry
                        </h1>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:34px 38px 18px;">
                  <p style="margin:0;color:#596171;font-size:16px;line-height:1.7;">
                    A prospective partner submitted the contact form for support with ${serviceType}.
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
                        Company <span style="color:#8b95a6;font-weight:700;text-transform:none;letter-spacing:0;">(optional)</span>
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:${data.company ? "#07162b" : "#596171"};">
                        ${company}
                      </td>
                    </tr>
                    <tr>
                      <td style="width:160px;padding:16px 18px;background:#f5f7fd;border-radius:8px 0 0 8px;color:#91388b;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:1px;">
                        Service
                      </td>
                      <td style="padding:16px 18px;background:#f5f7fd;border-radius:0 8px 8px 0;font-size:15px;font-weight:700;color:#07162b;">
                        ${serviceType}
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
                          Client Message
                        </p>
                        <p style="margin:0;color:#ffffff;font-size:16px;line-height:1.75;white-space:pre-line;">
                          ${message}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td style="padding:24px 38px;background:#f5f7fd;border-top:1px solid #d9deea;">
                  <p style="margin:0;color:#596171;font-size:13px;line-height:1.6;">
                    Suggested next step: schedule a discovery call to understand the business goal,
                    current technology environment, and required roadmap for delivery.
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
