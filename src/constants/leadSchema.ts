import { z } from 'zod';

export const leadSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phone: z.string().min(10, 'Please enter a valid 10-digit number.'),
  whoNeeds: z.enum(['myself', 'kids', 'parents', 'friend']).optional(),
  agreeWhatsapp: z.boolean().optional(),
});

export type LeadFormValues = z.infer<typeof leadSchema>;
