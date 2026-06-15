'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputField } from '@/components/common/input-field';
import { PasswordField } from '@/components/common/password-field';
import { PhoneField } from '@/components/common/phone-field';
import { Button } from '@/components/ui/button';
import { setAccessTokenCookie } from '@/lib/auth/clientCookies';
import { toast } from '@/lib/toast';
import { cn } from '@/lib/utils';
import { loginSchema } from '@/schemas/authSchema';
import type { LoginFormValues } from '@/types/authTypes';
import { useAppDispatch } from '@/store';
import { useLoginMutation } from '@/store/api/authApi';
import { setCredentials } from '@/store/slices/authSlice';
function getErrorMessage(error: unknown): string {
  if (
    typeof error === 'object' &&
    error !== null &&
    'data' in error &&
    typeof error.data === 'object' &&
    error.data !== null &&
    'message' in error.data &&
    typeof error.data.message === 'string'
  ) {
    return error.data.message;
  }

  return 'Unable to sign in. Please try again.';
}

export function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      phoneNumber: '',
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    const { email, password } = values;

    try {
      const response = await login({ email, password }).unwrap();
      setAccessTokenCookie(response.token);
      dispatch(setCredentials(response));
      toast.success(`Welcome back, ${response.user.name}!`);
      router.replace('/dashboard');
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputField
        label="Email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        {...register('email')}
      />

      <PasswordField
        label="Password"
        autoComplete="current-password"
        placeholder="Enter your password"
        error={errors.password?.message}
        {...register('password')}
      />

      {/* <PhoneField
        label="Phone Number"
        name="phoneNumber"
        control={control}
        required
        defaultCountry="CA"
        error={errors.phoneNumber?.message}
      /> */}

      <Button type="submit" className={cn('w-full')} size="lg" loading={isLoading}>
        Sign in
      </Button>
    </form>
  );
}
