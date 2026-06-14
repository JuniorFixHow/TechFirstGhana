"use client";

import { sendEmail } from "@/lib/actions/contact.action";
import { ContactActionState } from "@/types/Types";
import { useActionState, useEffect, useRef } from "react";

const initialState: ContactActionState = { success: false, message: "" };

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(sendEmail, initialState);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form action={formAction} className="contact-form" ref={formRef}>
      <h2>Send us a message</h2>
      <div className="form-grid">
        <label>
          Full Name
          <input name="name" placeholder="John Doe" required />
        </label>
        <label>
          Phone Number
          <input name="phoneNumber" placeholder="+233 30 000 0000" required type="tel" />
        </label>
        <label className="form-field-wide">
          Email Address
          <input name="email" placeholder="john@company.com" required type="email" />
        </label>
        <label>
          Company
          <input name="company" placeholder="TechFirst Inc. (optional)" />
        </label>
        <label>
          Service Interest
          <select name="serviceType" defaultValue="Strategic Advisory">
            <option>Strategic Advisory</option>
            <option>Custom Software</option>
            <option>Cloud Migration</option>
            <option>Microsoft 365</option>
            {/* <option>Other</option> */}
          </select>
        </label>
      </div>
      <label>
        Message
        <textarea name="message" placeholder="How can we help your business thrive?" required />
      </label>
      <button disabled={pending} type="submit">
        {pending ? "Sending..." : "Send Message ▷"}
      </button>
      {state.message ? (
        <p className={state.success ? "form-status success" : "form-status"}>{state.message}</p>
      ) : null}
    </form>
  );
}
