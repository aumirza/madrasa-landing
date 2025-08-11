import { Button } from '@/components/ui/button';

const HOW_IT_WORKS_STEPS = [
  {
    title: 'Tap Any Button',
    description: "Share your number — we'll do the rest.",
  },
  {
    title: 'Friendly Call from Madrasa',
    description:
      "We'll understand your child's needs and suggest a caring tutor.",
  },
  {
    title: '1st Free Demo Class',
    description: 'Your child gets matched with a gentle, verified Ustaad.',
  },
  {
    title: 'Start Monthly Learning',
    description:
      'If satisfied, you can start regular classes — or try a second free demo.',
  },
];

export function HowItWorksSection() {
  const steps = HOW_IT_WORKS_STEPS.map((item) => (
    <div className="flex gap-3.5" key={item.title}>
      {/* Icon Placeholder */}
      <div className="size-10 shrink-0 rounded-xl bg-accent" />

      {/* Text content */}
      <div className="flex flex-col gap-1">
        <p className="font-semibold text-heading">{item.title}</p>
        <p className="font-manrope text-sm text-subheading">
          {item.description}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="grid grid-cols-2 divide-x lg:h-[21.25rem]">
      {/*1. Left: CTA section */}
      <div className="col-span-2 flex h-full flex-1 shrink-0 flex-col justify-between gap-8.5 px-5 py-8.5 sm:p-10 md:col-span-1">
        {/* Top:  Title and description */}
        <div className="space-y-1">
          <p className="font-bold text-2xl text-[#292108]">How it works</p>
          <p className="font-manrope font-medium text-sm text-subheading">
            We've built a simpler, faster way to match you with the right Ustaad
            — all streamlined to save you time and effort.
          </p>
        </div>
        {/*  */}
        <div className="flex h-full flex-col gap-5 md:hidden">{steps}</div>
        {/* Bottom:  Button with caption */}
        <div className="flex flex-col items-center space-y-3">
          <p className="font-manrope font-semibold text-subheading text-xs uppercase tracking-[.08em]">
            Struggling to find a perfect tutor.
          </p>
          <Button
            className="w-full rounded-lg bg-gradient-cta font-bold"
            size="lg"
          >
            Start With 2 Free Demo
          </Button>
        </div>
      </div>
      {/* 2. Right: How it works steps */}
      <div className="hidden h-full flex-1 shrink-0 flex-col gap-5 p-10 pl-7.5 md:flex md:pl-10 ">
        {steps}
      </div>
    </div>
  );
}
