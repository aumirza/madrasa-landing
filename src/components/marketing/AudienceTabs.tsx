'use client';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';
import bgGridImage from '@/assets/images/bg-grid.svg';
import kidsImage from '@/assets/images/kids.webp';
import parentsImage from '@/assets/images/parents.webp';
import professionalsImage from '@/assets/images/professionals.webp';
import studentsImage from '@/assets/images/students.webp';
import womenImage from '@/assets/images/women.webp';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { HowItWorksSection } from './HowItWorksSection';

const TAB_LIST = {
  parents: {
    title: 'Parents',
    image: parentsImage,
    description: 'Let your child learn from home, with trusted teachers.',
    className: 'text-accent-yellow-900 bg-accent-yellow-100',
    filter:
      'invert-[.31] sepia-[.3] saturate-[10.25] hue-rotate-[7deg] brightness-[.97] contrast-[.86]',
  },
  kids: {
    title: 'Kids',
    image: kidsImage,
    description: 'Fun, friendly Deen classes made for young minds.',
    className: 'bg-primary-50 text-primary-700',
    filter:
      'invert-[.19] sepia-[.66] saturate-[33.47] hue-rotate-[255deg] brightness-100 contrast-[.91]',
  },
  students: {
    title: 'Students',
    image: studentsImage,
    description: 'Deepen your Islamic knowledge beyond School & Colleges.',
    className: 'bg-semantic-info-100 text-semantic-info-950',
    filter:
      'invert-[.18] sepia-[.69] saturate-[73.41] hue-rotate-[189deg] brightness-[.95] contrast-[.98]',
  },
  professionals: {
    title: 'Professionals',
    image: professionalsImage,
    description: "Busy schedule? We'll adjust. Your Deen matters too.",
    className: 'bg-semantic-success-700 bg-semantic-success-50',
    filter:
      'invert-[.21] sepia-[.78] saturate-[4.02] hue-rotate-[109deg] brightness-[.93] contrast-[.85]',
  },
  women: {
    title: 'Women Only',
    image: womenImage,
    description: 'Teach Islam. Earn ethically. Empower the Ummah.',
    className: 'text-primary-700 bg-primary-50',
    filter:
      'invert-[.09] sepia-[.85] saturate-[50.22] hue-rotate-[263deg] brightness-[.8] contrast-[.97]',
  },
};

export function AudienceTabs() {
  const [activeTab, setActiveTab] = useState<keyof typeof TAB_LIST>(
    Object.keys(TAB_LIST)[0] as keyof typeof TAB_LIST
  );
  return (
    <div className="my-10 flex min-h-screen w-full items-center justify-center">
      <Tabs
        onValueChange={(value) => setActiveTab(value as keyof typeof TAB_LIST)}
        value={activeTab}
      >
        <TabsList>
          {Object.entries(TAB_LIST).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key}>
              {title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value={activeTab}>
          <div
            className="flex max-w-5xl animate-slide-in flex-col 2xl:max-w-[1440px]"
            key={activeTab}
          >
            {/* Banner section */}
            <div
              className={cn(
                'flex flex-col gap-2.5',
                TAB_LIST[activeTab].className
              )}
            >
              <h3 className="px-5 pt-6 pb-2.5 font-bold text-3xl sm:px-10 sm:py-6 ">
                {TAB_LIST[activeTab].title}
              </h3>

              {/* Bg grid and foreground image */}
              <div className="relative h-50 sm:h-[10.625rem] ">
                <Image
                  alt="Background Grid"
                  className={cn(
                    'h-full w-full object-cover ',
                    TAB_LIST[activeTab].filter
                  )}
                  src={bgGridImage}
                />
                <Image
                  alt="Audience Image"
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-40 object-cover sm:h-[110%] sm:w-fit sm:object-center"
                  src={TAB_LIST[activeTab].image}
                />
              </div>

              {/*  */}
              <div className="flex justify-between px-5.5 py-4 sm:items-center sm:px-10 sm:py-6">
                <p className="font-bold font-manrope">
                  {TAB_LIST[activeTab].description}
                </p>
                <ArrowRightIcon
                  className="size-10 transition-transform duration-200 hover:scale-110 sm:size-6"
                  weight="bold"
                />
              </div>
            </div>

            <HowItWorksSection />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
