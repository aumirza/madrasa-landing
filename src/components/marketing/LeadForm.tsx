import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import type React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import whatsappIcon from '@/assets/icons/whatsapp.svg';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { LoadingButton } from '@/components/ui/loading-button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { type LeadFormValues, leadSchema } from '@/constants/leadSchema';
import { useEnquiryMutation } from '@/lib/enquiryApi';
import { PhoneInput } from '../ui/phone-input';
import { StatusModal } from './StatusModal';

export type LeadFormProps = {
  initialPhone?: string;
};

export const LeadForm: React.FC<LeadFormProps> = ({ initialPhone }) => {
  const enquiryMutation = useEnquiryMutation();
  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: '',
      phone: initialPhone ?? '',
      whoNeeds: 'myself',
      agreeWhatsapp: true,
    },
  });

  async function handleSubmit(values: LeadFormValues) {
    try {
      await enquiryMutation.mutateAsync({
        enquiryFor: values.whoNeeds ?? 'myself',
        name: values.fullName,
        phone: values.phone,
        source: 'marketing-website',
      });
      setModalTitle('Alhamdulillah!');
      setModalDescription(
        'Details saved! We’ll contact you soon on WhatsApp or call with your best course & tutor match.'
      );
      setModalStatus('success');
      setModalOpen(true);
    } catch {
      setModalTitle('Sorry!');
      setModalDescription(
        'Something went wrong please try again in a few minutes.'
      );
      setModalStatus('error');
      setModalOpen(true);
    }
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<React.ReactNode>('');
  const [modalDescription, setModalDescription] = useState<React.ReactNode>('');
  const [modalStatus, setModalStatus] = useState<'success' | 'error'>(
    'success'
  );

  return (
    <Form {...form}>
      <form
        className="flex h-full flex-col justify-between gap-15"
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <div className="space-y-3 md:space-y-4">
          <h3 className="font-bold text-heading text-xl leading-[140%]">
            Start Learning Qur’an Online
          </h3>

          <div className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-manrope font-medium text-neutral-600 leading-5">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="rounded-lg"
                      placeholder="Enter your full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-manrope font-medium text-neutral-600 leading-5">
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <PhoneInput
                      className="h-9 rounded-lg"
                      defaultCountry="IN"
                      placeholder="Enter your phone number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="whoNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-manrope font-medium text-neutral-600 leading-5">
                    Who Needs the Tutor?
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full rounded-lg">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="myself">For Myself</SelectItem>
                        <SelectItem value="kids">For My Kids</SelectItem>
                        <SelectItem value="parents">For My Parents</SelectItem>
                        <SelectItem value="friend">For My Friend</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-1.5 rounded border-2 border-semantic-success-100 border-dashed bg-semantic-success-50 px-3 py-2.5 font-manrope font-medium text-heading text-xs ">
              <Image alt="Whatsapp" className="size-8" src={whatsappIcon} />
              Enter your Whatsapp number and leave it on us We’ll help you pick
              the right Maktab plan.
            </div>
          </div>
        </div>

        <LoadingButton
          className="h-10 w-full rounded-xl bg-gradient-cta"
          isLoading={form.formState.isSubmitting}
          type="submit"
        >
          Get details on WhatsApp
        </LoadingButton>
        <StatusModal
          description={modalDescription}
          onOpenChange={setModalOpen}
          open={modalOpen}
          status={modalStatus}
          title={modalTitle}
        />
      </form>
    </Form>
  );
};
