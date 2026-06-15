import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-3 focus-visible:ring-btn-primary/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-btn-primary text-white hover:bg-btn-primary-pressed active:bg-btn-primary-pressed disabled:bg-btn-primary-disabled-bg disabled:text-btn-primary-disabled-fg',
        default:
          'border-transparent bg-btn-primary text-white hover:bg-btn-primary-pressed active:bg-btn-primary-pressed disabled:bg-btn-primary-disabled-bg disabled:text-btn-primary-disabled-fg',
        secondary:
          'border-btn-primary bg-transparent text-btn-primary hover:border-btn-primary-pressed hover:text-btn-primary-pressed active:border-btn-primary-pressed active:text-btn-primary-pressed disabled:border-btn-disabled disabled:text-btn-disabled',
        'secondary-green':
          'border-btn-success bg-transparent text-btn-success hover:border-btn-success-pressed hover:text-btn-success-pressed active:border-btn-success-pressed active:text-btn-success-pressed disabled:border-btn-disabled disabled:text-btn-disabled',
        dark:
          'border-transparent bg-btn-dark text-white hover:bg-btn-dark-pressed active:bg-btn-dark-pressed disabled:bg-btn-disabled disabled:text-white/70',
        ghost:
          'border-transparent bg-transparent text-btn-muted hover:bg-transparent hover:text-btn-muted active:text-btn-muted disabled:text-btn-disabled',
        link:
          'h-auto border-transparent bg-transparent p-0 text-btn-success underline underline-offset-4 hover:text-btn-success-pressed active:text-btn-success-pressed disabled:text-btn-disabled disabled:no-underline',
        outline:
          'border-btn-primary bg-transparent text-btn-primary hover:border-btn-primary-pressed hover:text-btn-primary-pressed active:border-btn-primary-pressed active:text-btn-primary-pressed disabled:border-btn-disabled disabled:text-btn-disabled',
        destructive:
          'border-transparent bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20 active:bg-destructive/25 disabled:bg-destructive/5 disabled:text-destructive/40 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40',
      },
      size: {
        default:
          'h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
        xs: 'h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*=\'size-\'])]:size-3',
        sm: 'h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*=\'size-\'])]:size-3.5',
        lg: 'h-10 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3',
        icon: 'size-8',
        'icon-xs':
          'size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*=\'size-\'])]:size-3',
        'icon-sm':
          'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);
