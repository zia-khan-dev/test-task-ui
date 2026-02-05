import { Icon, icons } from '../../utils/icons';
import PersonAvatar from '../ui/PersonAvatar';

export default function Topbar({ onMenuClick, sidebarCollapsed, onCollapseToggle }) {
  return (
    <header className="h-16 bg-background-light border-b border-border-color flex items-center justify-between gap-4 px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-2 shrink-0">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex lg:hidden w-10 h-10 items-center justify-center rounded-full bg-white border border-border-color hover:bg-white/80 text-primary transition-colors shrink-0"
          aria-label="Toggle sidebar"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <button
          type="button"
          onClick={onCollapseToggle}
          className="hidden lg:flex w-10 h-10 items-center justify-center rounded-full bg-white border border-border-color hover:bg-white/80 text-primary transition-colors shrink-0"
          aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${sidebarCollapsed ? 'rotate-180' : ''}`}>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

      <div className="flex-1 flex justify-center min-w-0 max-w-2xl">
        <div className="relative w-full">
          <Icon src={icons.search} size={18} className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary" color="primary" />
          <input
            type="search"
            placeholder="Search"
            className="w-full h-11 pl-11 pr-4 rounded-[10px] border border-border-color bg-white text-primary font-cairo text-[14px] placeholder:text-secondary focus:outline-none focus:border-primary"
          />
        </div>
      </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <button type="button" className="relative p-2 rounded-[8px] hover:bg-white text-primary transition-colors" aria-label="Notifications">
          <Icon src={icons.notification} size={22} color="primary" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full" />
        </button>
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-[10px] bg-white border border-border-color">
          <PersonAvatar size="sm" />
          <span className="text-[14px] font-medium text-primary font-cairo">Mohamed</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary shrink-0">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </header>
  );
}
