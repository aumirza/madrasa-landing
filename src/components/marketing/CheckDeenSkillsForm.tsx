'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { PhoneInput } from '../ui/phone-input';
import { LeadDrawer } from './LeadDrawer';

export function CheckDeenSkillsForm() {
  const [phone, setPhone] = useState<string>();

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
      <div className="flex flex-col gap-3">
        <PhoneInput
          className="h-10"
          defaultCountry="IN"
          onChange={(value) => setPhone(value?.toString())}
          placeholder="Enter phone number"
        />
        <p className="font-manrope font-semibold text-neutral-400 text-xs sm:text-center">
          We’ll help you pick the right Maktab plan.
        </p>
      </div>
      <LeadDrawer phone={phone}>
        <Button
          className="rounded-lg bg-gradient-to-b from-neutral-600 to-neutral-950 px-5 py-2.5 "
          size="lg"
        >
          Check my deen skills
        </Button>
      </LeadDrawer>
    </div>
  );
}
