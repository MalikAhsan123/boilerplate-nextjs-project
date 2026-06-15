import type { Button as ButtonPrimitive } from '@base-ui/react/button';
import type { VariantProps } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import type { Control, FieldPath, FieldValues } from 'react-hook-form';
import type { Country } from 'react-phone-number-input';
import type { ToastContent, ToastOptions } from 'react-toastify';
import type * as React from 'react';

import type { buttonVariants } from '@/components/ui/button-variants';
import type { Input } from '@/components/ui/input';
import type { makeStore } from '@/store/makeStore';

// App
export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// Config
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Store
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// Toast
export type ToastInput = ToastContent | (ToastOptions & { message?: ToastContent });

// Hooks
export interface UsePaginationOptions {
  initialPage?: number;
  pageSize?: number;
}

// Providers
export interface AppProviderProps {
  children: React.ReactNode;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}

// Components
export type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

export type CardWrapperProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  headerBorder?: boolean;
};

export interface ConfirmDialogProps {
  opened: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
  loading?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export type InputFieldProps = Omit<React.ComponentProps<typeof Input>, 'id'> & {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export interface LoaderProps {
  message?: string;
  className?: string;
}

export interface ModalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export type PasswordFieldProps = Omit<React.ComponentProps<typeof Input>, 'id' | 'type'> & {
  label: string;
  id?: string;
  error?: string;
  hint?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
};

export type PhoneFieldProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  error?: string;
  hint?: string;
  required?: boolean;
  defaultCountry?: Country;
  containerClassName?: string;
  labelClassName?: string;
  className?: string;
};

export type CountrySelectOption = {
  value?: string;
  label: string;
  divider?: boolean;
};

export type CountryIconProps = {
  country?: string;
  label?: string;
  'aria-hidden'?: boolean;
};

export type SearchableCountrySelectProps = {
  name?: string;
  value?: string;
  onChange: (value?: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  options: CountrySelectOption[];
  iconComponent: React.ElementType<CountryIconProps>;
  disabled?: boolean;
  readOnly?: boolean;
  className?: string;
  'aria-label'?: string;
};

export type DropdownPosition = {
  top: number;
  left: number;
  minWidth: number;
};
