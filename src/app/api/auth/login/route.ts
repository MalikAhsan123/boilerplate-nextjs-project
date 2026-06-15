import { NextResponse } from 'next/server';

import type { LoginRequest, LoginResponse } from '@/types/authTypes/index.ts';

export async function POST(request: Request) {
  let body: LoginRequest;

  try {
    body = (await request.json()) as LoginRequest;
  } catch {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const email = body.email?.trim();
  const password = body.password;

  if (!email || !password) {
    return NextResponse.json(
      { message: 'Email and password are required' },
      { status: 400 }
    );
  }

  const response: LoginResponse = {
    token: `mock-token-${Date.now()}`,
    user: {
      id: '1',
      email,
      name: email.split('@')[0] ?? 'User',
    },
  };

  return NextResponse.json(response);
}
