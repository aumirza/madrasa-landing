/** biome-ignore-all lint/complexity/useLiteralKeys: For demo */
'use client';
import { ArrowRightIcon } from '@phosphor-icons/react';
import Image from 'next/image';
import { useState } from 'react';

import bgGridImage from '@/assets/images/bg-grid.png';
import parentsImage from '@/assets/images/parents.png';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { HowItWorksSection } from './HowItWorksSection';

const TAB_LIST = {
  parents: {
    title: 'Parents',
    image: parentsImage,
    description:
      'A thoughtful way to deepen your understanding — no matter your routine.',
    className: 'bg-[#FEFAEC] text-[#564616]',
  },
  kids: {
    title: 'Kids',
    description: 'Engaging activities to spark curiosity and learning.',
  },
  students: {
    title: 'Students',
    description: 'Personalized support to help you excel academically.',
  },
  professionals: {
    title: 'Professionals',
    description: 'Expert guidance to advance your career and skills.',
  },
  tutors: {
    title: 'Tutors',
    description: 'Dedicated educators to help you succeed.',
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
          <div className="flex max-w-5xl flex-col xl:max-w-[1440px]">
            {/* Banner section */}
            <div
              className={cn(
                'flex flex-col gap-2.5 ',
                TAB_LIST['parents'].className
              )}
            >
              <h3 className="px-10 py-6 font-bold text-3xl ">
                {TAB_LIST['parents'].title}
              </h3>

              {/* Bg grid and foreground image */}
              <div className="relative h-[10.625rem]">
                <Image
                  alt="Background Grid"
                  className="w-full"
                  src={bgGridImage}
                />
                <Image
                  alt="Audience Image"
                  className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 max-h-[110%] w-fit object-center"
                  src={TAB_LIST['parents'].image}
                />
              </div>

              {/*  */}
              <div className="flex items-center justify-between px-10 py-6">
                <p className="font-bold font-manrope">
                  {TAB_LIST['parents'].description}
                </p>
                <ArrowRightIcon size={20} weight="bold" />
              </div>
            </div>

            <HowItWorksSection />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
