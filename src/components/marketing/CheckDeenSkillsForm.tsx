'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { PhoneInput } from '../ui/phone-input';

export function CheckDeenSkillsForm() {
  const [_phone, setPhone] = useState<string>();

  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-3">
        <PhoneInput
          className="h-10"
          defaultCountry="IN"
          onChange={(value) => setPhone(value?.toString())}
          placeholder="Enter phone number"
        />
        <p className="text-center font-manrope font-semibold text-neutral-400 text-xs">
          We’ll help you pick the right Maktab plan.
        </p>
      </div>
      <Button
        className="rounded-lg bg-gradient-to-b from-neutral-600 to-neutral-950 px-5 py-2.5 "
        size="lg"
      >
        Check my deen skills
      </Button>
    </div>
  );
}
