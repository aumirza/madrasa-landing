import { Button } from './ui/button';

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
  return (
    <div className="grid h-[21.25rem] grid-cols-2 divide-x">
      {/*1. Left: CTA section */}
      <div className="flex h-full flex-col justify-between p-10">
        {/* Top:  Title and description */}
        <div className="space-y-1">
          <p className="font-bold text-2xl text-[#292108]">How it works</p>
          <p className="font-manrope font-medium text-subheading">
            We've built a simpler, faster way to match you with the right Ustaad
            — all streamlined to save you time and effort.
          </p>
        </div>
        {/* Bottom:  Button with caption */}
        <div className="flex flex-col items-center space-y-3">
          <p className="font-manrope font-semibold text-sm text-subheading uppercase">
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
      <div className="flex h-full flex-col gap-5 p-5">
        {HOW_IT_WORKS_STEPS.map((item) => (
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
        ))}
      </div>
    </div>
  );
}
