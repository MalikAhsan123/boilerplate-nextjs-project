import { CardWrapper } from '@/components/common/card-wrapper';
import { LoginForm } from '@/components/forms/login-form';
import { APP_NAME } from '@/config';

export function LoginPage() {
  return (
    <CardWrapper
      title="Sign in"
      description={`Enter your credentials to access ${APP_NAME}`}
      className="w-full max-w-md"
    >
      <LoginForm />
    </CardWrapper>
  );
}
