export type ContactFormPayload = {
  firstName: string;
  lastName: string;
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
