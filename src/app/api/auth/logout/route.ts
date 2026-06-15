import { NextResponse } from 'next/server';

import type { LogoutResponse } from '@/types/authTypes';

export async function POST() {
  const response: LogoutResponse = { ok: true };
  return NextResponse.json(response);
}
