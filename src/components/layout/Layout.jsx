import { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

export default function Layout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-background-light flex">
      <div
        className={`fixed inset-0 z-40 bg-primary/50 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed top-0 left-0 z-50 h-screen transition-[transform,width] duration-200 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar
          collapsed={sidebarCollapsed}
          onNavigate={() => setSidebarOpen(false)}
        />
      </div>
      <div
        className={`flex flex-col min-h-screen min-w-0 flex-1 transition-[margin] duration-200 ${
          sidebarCollapsed ? 'lg:ml-[72px]' : 'lg:ml-64'
        }`}
      >
        <Topbar
          onMenuClick={handleMenuClick}
          sidebarCollapsed={sidebarCollapsed}
          onCollapseToggle={() => setSidebarCollapsed((prev) => !prev)}
        />
        <main className="flex-1 bg-background-light p-4 md:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
