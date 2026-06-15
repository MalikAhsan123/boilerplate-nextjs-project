'use client';

import { Label } from '@/components/ui/label';
import { SearchableCountrySelect } from '@/components/common/phone-field/searchable-country-select';
import { cn } from '@/lib/utils';
import type { PhoneFieldProps } from '@/types';
import type { FieldValues } from 'react-hook-form';
import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import type { Country } from 'react-phone-number-input';

import 'react-phone-number-input/style.css';
import './phone-field.css';

export function PhoneField<T extends FieldValues>({
  label,
  name,
  control,
  error,
  hint,
  required,
  defaultCountry = 'US',
  containerClassName,
  labelClassName,
  className,
}: PhoneFieldProps<T>) {
  return (
    <div className={cn('flex flex-col gap-2', containerClassName)}>
      <Label className={labelClassName}>
        <span>
          {label}
          {required ? <span className="text-destructive">*</span> : null}
        </span>
      </Label>
      <PhoneInputWithCountry
        name={name}
        control={control}
        defaultCountry={defaultCountry}
        international
        countryCallingCodeEditable={false}
        addInternationalOption={false}
        countrySelectComponent={SearchableCountrySelect}
        className={cn('phone-field', error && 'phone-field--error', className)}
      />
      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-sm text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

export type { Country };
