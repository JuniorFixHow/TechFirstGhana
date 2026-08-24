import { brand } from "@/lib/site-data";
import { CareersFormPayload } from "@/types/Types";
import { SendMailResult } from "./sendContactMail";
import { mailTransporter } from "../nodemailer";
import { careerEmailTemplate } from "./Careeremailtemplate";


export const sendCareerMail = async (
  payload: CareersFormPayload
): Promise<SendMailResult> => {
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER;
  // Fixed recipient per requirement, with an env override available if you ever need one.
  const to = process.env.SMTP_USER;

  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS || !from) {
    console.info("Career form submission captured without SMTP config", payload);
    return { success: true };
  }

  await mailTransporter.sendMail({
    from: `"${brand.name} Website" <${from}>`,
    to,
    replyTo: payload.email,
    subject: `New ${brand.name} career application - ${payload.role}`,
    html: careerEmailTemplate(payload),
  });

  return { success: true };
};