'use client';

import { useState } from 'react';
import { Container } from '@/components/layouts/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/boxed-accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FAQ_DATA = {
  class: {
    label: 'Try a Class',
    faqs: [
      {
        id: 1,
        question: 'Can I try before enrolling?',
        answer:
          'Yes. You can book a free live demo class (20–30 mins) to see how our Qur’an, Tajweed, Hifz, Arabic, or Islamic Studies classes work.',
      },
      {
        id: 2,
        question: 'Is the demo truly live?',
        answer:
          'Yes — our demo is with a real teacher, real class, not a recording.',
      },
      {
        id: 3,
        question: 'How long is the demo?',
        answer: 'Usually 20–30 minutes.',
      },
      {
        id: 4,
        question: 'What happens in the demo?',
        answer: (
          <>
            <p>Short level assessment</p>
            <p>Free Skill Check with 1-on-1 Guidance</p>
            <p>
              A mini lesson (e.g., Noorani Qaida / Tajweed tip / surah / Arabic
              basics)
            </p>
            <p>
              A personal plan with suggested class type (1-on-1, Private Group,
              or Batch)
            </p>
          </>
        ),
      },
    ],
  },
  booking: {
    label: 'How to Book',
    faqs: [
      {
        id: 5,
        question: 'How do I book a demo?',
        answer:
          'Click Start With 2 Free Demo, and share your details. You’ll get a call from the Madrasa team.',
      },
      {
        id: 6,
        question: 'What timings do you offer?',
        answer:
          'We have mornings, evenings, and weekend slots (IST)—perfect for Kids, Students, Parents, and Working professionals.',
      },
      {
        id: 7,
        question: 'What if I miss my slot?',
        answer:
          'No worries—you can reschedule easily by informing us via WhatsApp.',
      },
    ],
  },
  tutor: {
    label: 'Your Ustaad',
    faqs: [
      {
        id: 8,
        question: 'Can parents sit with the child?',
        answer:
          'Yes. In fact, we encourage parents to join for children’s demos.',
      },
      {
        id: 9,
        question: 'Can I choose a female tutor?',
        answer:
          'Yes, you can request a female teacher at the time of booking (For female tutors, only female students or young children will be accepted.).',
      },
      {
        id: 10,
        question: 'Which class type should I choose?',
        answer: (
          <>
            <p>
              <strong>1-on-1:</strong> fastest progress, full attention
            </p>
            <p>
              <strong>Private Group (up to 5):</strong> for family/friends,
              affordable & focused
            </p>
            <p>
              <strong>Batch (up to 30):</strong> budget-friendly, structured,
              peer learning
            </p>
          </>
        ),
      },
    ],
  },
  tech: {
    label: 'Tech & Safety',
    faqs: [
      {
        id: 11,
        question: 'Do I need to install anything?',
        answer:
          'No app needed. Just join via a browser link on mobile or laptop.',
      },
      {
        id: 12,
        question: 'Is it child-safe?',
        answer:
          'Yes. We ensure moderated sessions, privacy controls, and parent oversight.',
      },
      {
        id: 13,
        question: 'Will the demo be recorded?',
        answer: 'Only if you give explicit consent.',
      },
      {
        id: 14,
        question: 'Is the Internet needed?',
        answer:
          'A stable 1–2 Mbps connection is enough. Headphones recommended.',
      },
    ],
  },
  next: {
    label: 'Next Steps',
    faqs: [
      {
        id: 15,
        question: 'What happens after the demo?',
        answer:
          'You’ll get your level report, recommended course, time slot options, and a plan with monthly payments.',
      },
      {
        id: 16,
        question: 'Is payment halal?',
        answer:
          'Yes. We don’t use EMI/interest-based systems. Instead, we offer yearly subscriptions with monthly payment options, 100% Shariah-compliant.',
      },
      {
        id: 17,
        question: 'What languages do you teach in?',
        answer: 'We teach in English, Hindi, and Urdu (Arabic when relevant).',
      },
    ],
  },
};

export function FAQ() {
  const [activeTab, setActiveTab] = useState<keyof typeof FAQ_DATA>('class');
  return (
    <Container className="flex flex-col gap-8" fluid="sm">
      <div className="flex flex-col items-center gap-3.5">
        <h3 className="text-center font-bold text-3xl text-heading leading-8.5">
          Frequently Asked Questions
        </h3>
        <div className="flex items-center gap-1.5">
          {/* ripple animation */}
          <span className="relative flex h-4 w-4 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ripple rounded-full bg-primary opacity-75" />
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <p className="font-manrope font-semibold text-xs uppercase">
            Swipe to see more lists
          </p>
        </div>
      </div>
      <Tabs
        onValueChange={(value) => setActiveTab(value as keyof typeof FAQ_DATA)}
        value={activeTab}
      >
        <div className="flex w-full items-center border-b">
          <TabsList>
            {Object.entries(FAQ_DATA).map(([key, { label }]) => (
              <TabsTrigger key={key} value={key}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <TabsContent value={activeTab}>
          <div className="animate-slide-in px-5 py-6">
            <Accordion collapsible type="single">
              {
                // render faqs for selected tab
              }
              {FAQ_DATA[activeTab].faqs.map(({ id, question, answer }) => (
                <AccordionItem key={id} value={`faq-${id}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </TabsContent>
      </Tabs>
    </Container>
  );
}
