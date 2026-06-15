import { APP_NAME } from '@/config';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">{APP_NAME}</p>
      </div>
    </footer>
  );
}

export default Footer;
