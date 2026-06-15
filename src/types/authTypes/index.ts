import { loginSchema } from '@/schemas/authSchema';
import type { z } from 'zod';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

export interface LogoutResponse {
  ok: boolean;
}

export type LoginFormValues = z.infer<typeof loginSchema>;
