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


export interface CareersFormPayload {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    country: string;
    experience: 'Beginner' | 'Intermediate' | 'Expert';
    portfolio?: string; //github or blog or personal website or LinkedIn
    skills?: string[];
    role: 'Investor' | 'Designer' | 'Developer' | 'Product Manager' | 'Marketer' | 'Sales' | 'Tech Writer' | 'Business Development' | 'Other';
    compensationPreference: 'Project-profit-sharing' | 'Equity' | 'Both' | 'Open to discussion';
    reasonForJoining: string;
    projectsIntrested?: string[];
}

export interface IResponse {
    message: string;
    error: boolean;
    payload?: object;
    code?: number;
}