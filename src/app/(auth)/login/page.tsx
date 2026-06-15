import { Suspense } from 'react';

import { LoginPage } from '@/components/pages/auth/login';

export default function Login() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}
