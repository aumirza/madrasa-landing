'use client';

import { MonitorPlayIcon } from '@phosphor-icons/react';
import { Container } from '../layouts/Container';
import { CheckDeenSkillsForm } from './CheckDeenSkillsForm';

export function HeroSection() {
  return (
    <Container className="flex w-full flex-col items-center justify-center gap-12">
      {/* 740px for lg ,  */}
      <div className="flex w-full max-w-[46.25rem] flex-col items-center gap-3">
        {/* upper badge */}
        <div className="flex w-[250px] items-center gap-1 rounded-sm border border-light bg-gradient-to-r from-semantic-success-50 to-semantic-success-100 px-3 py-1 font-manrope text-semantic-success-600">
          <MonitorPlayIcon className="size-5 shrink-0" weight="fill" />
          <span className="text-nowrap font-extrabold text-sm">
            2 Free Demo
          </span>
          <span className="text-nowrap font-medium text-sm">
            for New Students
          </span>
        </div>
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-bold text-[2.5rem] leading-[100%]">
            Learn Deen Online with Guided Classes — Designed for Parents,
            Students & Working Professionals
          </h2>
          <p className="max-w-[35rem] text-center font-manrope font-medium">
            Structured lessons, flexible timings, and support that fits real
            life. A thoughtful way to deepen your understanding — no matter your
            routine.
          </p>
        </div>
      </div>
      {/* number input */}
      <CheckDeenSkillsForm />
    </Container>
  );
}
