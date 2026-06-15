import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME } from '@/config';

export function DashboardPageContent() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Welcome to {APP_NAME}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Get started</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Add routes under <code>src/app/</code>, page UI under{' '}
          <code>src/components/pages/</code>, and API endpoints in{' '}
          <code>src/store/api/</code>. Update sidebar links in{' '}
          <code>src/config.ts</code>.
        </CardContent>
      </Card>
    </div>
  );
}
