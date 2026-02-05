import { Icon, icons } from '../../utils/icons';

export default function Topbar({ onMenuClick, sidebarCollapsed, onCollapseToggle }) {
  return (
    <header className="h-16 bg-white border-b border-border-color flex items-center justify-between px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onMenuClick}
          className="p-2 rounded-[8px] hover:bg-background-light text-primary transition-colors lg:hidden"
          aria-label="Toggle sidebar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={onCollapseToggle}
          className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-background-light hover:bg-border-color text-primary transition-colors shrink-0"
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${sidebarCollapsed ? 'rotate-180' : ''}`}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md">
          <div className="relative flex-1">
            <Icon src={icons.search} size={18} className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" color="primary" />
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-10 pl-10 pr-4 rounded-[8px] border border-border-color bg-background-light text-primary font-cairo text-[14px] placeholder:text-secondary focus:outline-none focus:border-primary"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button type="button" className="p-2 rounded-[8px] hover:bg-background-light text-primary transition-colors" aria-label="Notifications">
          <Icon src={icons.notification} size={20} color="primary" />
        </button>
      </div>
    </header>
  );
}
