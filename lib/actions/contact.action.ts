'use server'

import { ContactActionState, ContactFormPayload } from "@/types/Types";
import { sendContactMail } from "../sendContactMail";

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function splitName(name: string) {
  const [firstName = "", ...rest] = name.trim().split(/\s+/);
  return {
    firstName,
    lastName: rest.join(" "),
  };
}

export async function sendEmail(
  _previousState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = readField(formData, "name");
  const email = readField(formData, "email");
  const phoneNumber = readField(formData, "phoneNumber");
  const company = readField(formData, "company");
  const serviceType = readField(formData, "serviceType");
  const message = readField(formData, "message");
  const nameParts = splitName(name);

  if (!name || !email || !phoneNumber || !serviceType || !message) {
    return { message: "Please complete every required field.", success: false };
  }

  const payload: ContactFormPayload = {
    ...nameParts,
    name,
    email,
    phoneNumber,
    company,
    serviceType,
    message,
  };

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
