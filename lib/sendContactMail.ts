// lib/sendContactMail.ts
import { ContactFormPayload } from "@/types/Types"
import { brand } from "./site-data"
import { mailTransporter } from "./nodemailer"
import { contactEmailTemplate } from "./contactEmail"


interface SendMailResult {
  success: boolean
}

export const sendContactMail = async (
  payload: ContactFormPayload
): Promise<SendMailResult> => {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER
  const to = process.env.CONTACT_TO ?? process.env.SMTP_USER

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !from || !to) {
    console.info("Contact form submission captured without SMTP config", payload)
    return { success: true }
  }

  await mailTransporter.sendMail({
    from: `"${brand.name} Website" <${from}>`,
    to,
    replyTo: payload.email,
    subject: `New ${brand.name} inquiry - ${payload.serviceType}`,
    html: contactEmailTemplate(payload),
  })

  return { success: true }
}
