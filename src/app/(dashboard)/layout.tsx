import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import { Sidebar } from '@/components/common/sidebar';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-7xl flex-1">
          <Sidebar />
          <div className="flex-1 px-4 py-8">{children}</div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
