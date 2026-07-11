'use server'

import { ContactActionState, ContactFormPayload } from "@/types/Types";
import { sendContactMail } from "../sendContactMail";


export async function sendEmail(
  payload: ContactFormPayload
): Promise<ContactActionState> {




  try {
    const res = await sendContactMail(payload);

    if (res.success) {
      return { message: "Email sent successfully.", success: true };
    }

    return { message: "Operation failed. Could not send email.", success: false };
  } catch (error) {
    console.error(error);
    return { message: "Failed to send email.", success: false };
  }
}
