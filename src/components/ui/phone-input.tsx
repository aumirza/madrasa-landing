'use client';

import { ChevronDownIcon, PhoneIcon } from 'lucide-react';
import React, { type ComponentProps, useId } from 'react';
import RPNInput, {
  type Country,
  type FlagProps,
  getCountryCallingCode,
} from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const InputComponent = ({
  className,
  ...props
}: ComponentProps<typeof Input>) => (
  <Input
    className={cn(
      'h-full rounded-s-none shadow-none focus-visible:z-10',
      className
    )}
    data-slot="phone-input"
    {...props}
  />
);

InputComponent.displayName = 'PhoneInput';

type CountrySelectProps = {
  disabled?: boolean;
  value: Country;
  onChange: (value: Country) => void;
  options: { label: string; value: Country | undefined }[];
};

const CountrySelect = ({
  disabled,
  value,
  onChange,
  options,
}: CountrySelectProps) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Country);
  };

  const countryCode = value ? `+${getCountryCallingCode(value)}` : '';

  return (
    <div
      className={cn(
        'relative flex items-center rounded-s-md border border-input bg-background py-2 ps-3 pe-2 focus-within:z-10 focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 hover:bg-accent hover:text-foreground has-disabled:pointer-events-none has-aria-invalid:border-destructive/60 has-disabled:opacity-50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40'
      )}
    >
      <span className="flex items-center gap-1">
        <FlagComponent country={value} countryName={value} />
        <span className="font-medium text-foreground">{countryCode}</span>
        <ChevronDownIcon
          aria-hidden="true"
          className="text-muted-foreground/80"
          size={16}
        />
      </span>
      <select
        aria-label="Select country"
        className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        disabled={disabled}
        onChange={handleSelect}
        value={value}
      >
        <option key="default" value="">
          Select a country
        </option>
        {options
          .filter((x) => x.value)
          .map((option, i) => (
            <option key={option.value ?? `empty-${i}`} value={option.value}>
              {option.label}{' '}
              {option.value && `+${getCountryCallingCode(option.value)}`}
            </option>
          ))}
      </select>
    </div>
  );
};

const FlagComponent = ({ country, countryName }: FlagProps) => {
  const Flag = flags[country];
  return (
    <span className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-full border border-input bg-white">
      {Flag ? (
        <Flag title={countryName} />
      ) : (
        <PhoneIcon aria-hidden="true" size={16} />
      )}
    </span>
  );
};

export function PhoneInput({
  id,
  placeholder,
  className,
  value,
  ...restProps
}: ComponentProps<typeof RPNInput>) {
  const idGenerated = useId();
  const idToPass = id || `phone-input-${idGenerated}`;

  return (
    <RPNInput
      className={cn('flex rounded-lg shadow-xs', className)}
      countrySelectComponent={CountrySelect}
      flagComponent={FlagComponent}
      id={idToPass}
      inputComponent={InputComponent}
      placeholder={placeholder || 'Enter your mobile number'}
      value={value}
      {...restProps}
    />
  );
}
