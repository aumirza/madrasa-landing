import { useMutation } from '@tanstack/react-query';
import type { AxiosResponse } from 'axios';
import { toast } from 'sonner';
import axiosInstance from './axios';

export type ContactFormPayload = {
  enquiryFor: string;
  name: string;
  phone: string;
  source?: string;
};

// export type ContactFormResponse = {
//   success: boolean;
//   message?: string;
//   // allow additional fields
//   [key: string]: unknown;
// };

/**
 * Send contact form enquiry to the backend.
 * POST /madrasaapp/api/v1/enquiry/contact-form
 */
export async function sendContactForm(
  payload: ContactFormPayload
): Promise<string> {
  const res: AxiosResponse<string> = await axiosInstance.post(
    '/madrasaapp/api/v1/enquiry/contact-form',
    payload
  );
  return res.data;
}

export function useEnquiryMutation() {
  return useMutation<string, unknown, ContactFormPayload>({
    mutationFn: (payload) => sendContactForm(payload),
    onSuccess(data) {
      toast.success(data ?? 'Enquiry submitted successfully');
    },
    onError() {
      toast.error('Failed to submit enquiry. Please try again later.');
    },
  });
}
