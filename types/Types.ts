import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

export type ExpertiseType = {
    title: string,
    text: string,
    icon: ReactNode,
}


export type TestimonialType = {
    name: string,
    title: string,
    text: string,
}

export type LeaderType = {
    name: string,
    title: string,
    text: string,
    image: string | StaticImport,
}


export type ContactFormPayload = {
  name: string;
  email: string;
  phoneNumber: string;
  company?: string;
  serviceType: string;
  message: string;
};

export type ContactActionState = {
  message: string;
  success: boolean;
};
