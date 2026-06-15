import {
  toast as toastify,
  type Id,
  type ToastContent,
  type ToastOptions,
  type UpdateOptions,
} from 'react-toastify';

import type { ToastInput } from '@/types';

const DEFAULT_AUTO_CLOSE = 4000;

function resolveInput(input: ToastInput): { content: ToastContent; options: ToastOptions } {
  if (typeof input === 'string' || typeof input === 'number') {
    return { content: input, options: {} };
  }

  if (typeof input === 'object' && input !== null && 'message' in input) {
    const { message, ...options } = input;
    return { content: message ?? '', options };
  }

  return { content: input as ToastContent, options: {} };
}

function show(input: ToastInput, defaults: ToastOptions = {}) {
  const { content, options } = resolveInput(input);

  return toastify(content, {
    autoClose: DEFAULT_AUTO_CLOSE,
    closeButton: true,
    ...defaults,
    ...options,
  });
}

export const toast = {
  show,

  success(input: ToastInput) {
    const { content, options } = resolveInput(input);
    return toastify.success(content, {
      autoClose: DEFAULT_AUTO_CLOSE,
      ...options,
    });
  },

  error(input: ToastInput) {
    const { content, options } = resolveInput(input);
    return toastify.error(content, {
      autoClose: false,
      ...options,
    });
  },

  info(input: ToastInput) {
    const { content, options } = resolveInput(input);
    return toastify.info(content, {
      autoClose: DEFAULT_AUTO_CLOSE,
      ...options,
    });
  },

  warning(input: ToastInput) {
    const { content, options } = resolveInput(input);
    return toastify.warning(content, {
      autoClose: DEFAULT_AUTO_CLOSE,
      ...options,
    });
  },

  loading(input: ToastInput) {
    const { content, options } = resolveInput(input);
    return toastify.loading(content, {
      autoClose: false,
      closeButton: false,
      ...options,
    });
  },

  dismiss: (toastId?: Id) => toastify.dismiss(toastId),
  clear: () => toastify.dismiss(),
  update: (toastId: Id, options: UpdateOptions) => toastify.update(toastId, options),
} as const;
