import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import type { InputFieldProps } from '@/types';

export function InputField({
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
}: InputFieldProps) {
  const fieldId = id ?? name;

  return (
    <div className={cn('flex flex-col gap-2', containerClassName)}>
      <Label htmlFor={fieldId} className={labelClassName}>
        {label}
      </Label>
      <Input
        id={fieldId}
        name={name}
        aria-invalid={Boolean(error)}
        className={cn(inputClassName, className)}
        {...inputProps}
      />
      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-sm text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}
