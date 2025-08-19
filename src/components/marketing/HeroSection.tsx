'use client';

import { MonitorPlayIcon } from '@phosphor-icons/react';
import { Container } from '../layouts/Container';
import { CheckDeenSkillsForm } from './CheckDeenSkillsForm';

export function HeroSection() {
  return (
    <Container className="flex w-full flex-col justify-center gap-12 sm:items-center">
      {/* 740px for lg ,  */}
      <div className="flex w-full max-w-[46.25rem] flex-col gap-3 sm:items-center">
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
        {/* Title and desc */}
        <div className="flex flex-col items-center gap-4 sm:text-center">
          <h2 className="font-bold text-3xl leading-[100%] sm:text-[2.5rem]">
            Learn Deen Online with Guided Classes — Designed for Parents,
            Students & Working Professionals
          </h2>
          <p className="max-w-[35rem] font-manrope font-medium text-sm sm:text-center sm:text-base">
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
