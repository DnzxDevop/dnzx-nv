
import { DashboardNav } from '@/components/dashboard-nav';
import { NavHeader } from '@/components/nav-header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavHeader />

      <div className="flex flex-1">
        <div className="w-64 bg-gray-800 p-4">
          <DashboardNav />
        </div>
        <main className="flex-1 p-8 bg-muted/10">
          {children}
        </main>
      </div>
    </div>
  );
}
