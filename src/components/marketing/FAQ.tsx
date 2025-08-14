'use client';

import { useState } from 'react';
import { Container } from '@/components/layouts/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const FAQ_DATA = {
  class: {
    label: 'Class Modes',
    faqs: [
      {
        id: 1,
        question: 'What is Madrasa app?',
        answer:
          'Madrasa is a comprehensive mobile app designed to serve the diverse needs of the Muslim community—offering everything from education and worship tools to lifestyle and travel solutions, all in one seamless platform.',
      },
    ],
  },
  maktab: {
    label: 'Maktab',
    faqs: [],
  },
  payment: {
    label: 'Payment',
    faqs: [],
  },
  tutor: {
    label: 'Tutor',
    faqs: [],
  },
  course: {
    label: 'Course',
    faqs: [],
  },
};

export function FAQ() {
  const [activeTab, setActiveTab] = useState<keyof typeof FAQ_DATA>('class');
  return (
    <Container className="flex flex-col gap-8">
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
              {new Array(5)
                .fill({
                  question: 'What is Madrasa app?',
                  answer:
                    'Madrasa is a comprehensive mobile app designed to serve the diverse needs of the Muslim community—offering everything from education and worship tools to lifestyle and travel solutions, all in one seamless platform.',
                })
                .map(({ question, answer }, idx) => (
                  <AccordionItem
                    key={`faq-${idx}-${Math.random().toString(36).slice(2, 9)}`}
                    value={`faq-${idx}-${Math.random().toString(36).slice(2, 9)}`}
                  >
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
