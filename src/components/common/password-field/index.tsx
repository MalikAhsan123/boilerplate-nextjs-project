'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import type { PasswordFieldProps } from '@/types';
import { Eye, EyeOff } from 'lucide-react';
import * as React from 'react';

export const PasswordField = React.forwardRef<HTMLInputElement, PasswordFieldProps>(
  function PasswordField(
    {
      label,
      id,
      error,
      hint,
      containerClassName,
      labelClassName,
      inputClassName,
      name,
      className,
      ...inputProps
    },
    ref,
  ) {
    const [visible, setVisible] = React.useState(false);
    const fieldId = id ?? name;

    const toggleVisibility = () => setVisible((current) => !current);

    const handleToggleKeyDown = (event: React.KeyboardEvent<HTMLSpanElement>) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleVisibility();
      }
    };

    return (
      <div className={cn('flex flex-col gap-2', containerClassName)}>
        <Label htmlFor={fieldId} className={labelClassName}>
          {label}
        </Label>
        <div className="relative">
          <Input
            ref={ref}
            id={fieldId}
            name={name}
            type={visible ? 'text' : 'password'}
            aria-invalid={Boolean(error)}
            className={cn('pr-9', inputClassName, className)}
            {...inputProps}
          />
          <span
            role="button"
            tabIndex={0}
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
            onClick={toggleVisibility}
            onKeyDown={handleToggleKeyDown}
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            {visible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
          </span>
        </div>
        {error ? (
          <p className="text-sm text-destructive">{error}</p>
        ) : hint ? (
          <p className="text-sm text-muted-foreground">{hint}</p>
        ) : null}
      </div>
    );
  },
);
