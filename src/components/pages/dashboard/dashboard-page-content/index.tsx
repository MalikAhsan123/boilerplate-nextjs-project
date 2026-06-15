import { CardWrapper } from '@/components/common/card-wrapper';
import { APP_NAME } from '@/config';

export function DashboardPageContent() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Welcome to the dashboard</p>
      </div>

      <CardWrapper
        title="Get started"
        description="Add routes under <code>src/app/</code>, page UI under <code>src/components/pages/</code>, and API endpoints in <code>src/store/api/</code>. Update sidebar links in <code>src/config.ts</code>."
        className="w-full max-w-full"
        headerBorder={false}
      >
        <div>
          <h2 className="text-2xl font-bold">Get started</h2>
          <p className="text-muted-foreground">
            Add routes under <code>src/app/</code>, page UI under <code>src/components/pages/</code>
            , and API endpoints in <code>src/store/api/</code>. Update sidebar links in{' '}
            <code>src/config.ts</code>.
          </p>
        </div>
      </CardWrapper>
    </div>
  );
}
