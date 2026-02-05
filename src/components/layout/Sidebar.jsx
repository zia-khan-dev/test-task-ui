import { NavLink } from 'react-router-dom';
import { icons, Icon } from '../../utils/icons';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: icons.home },
  { name: 'Perspectives', path: '/perspectives', icon: icons.perspectives },
  { name: 'Tasks', path: '/tasks', icon: icons.tasks },
  { name: 'Documents', path: '/documents', icon: icons.documents },
  { name: 'Reports', path: '/reports', icon: icons.reports },
  { name: 'Users & Roles', path: '/users', icon: icons.users },
];

export default function Sidebar({ collapsed, onNavigate }) {
  return (
    <aside
      className={`bg-primary text-white h-full border-r border-border-color flex flex-col transition-[width] duration-200 overflow-y-auto ${
        collapsed ? 'w-[72px] p-3' : 'w-64 p-6'
      }`}
    >
      <div className={`flex items-center gap-3 ${collapsed ? 'justify-center mb-6' : 'mb-8'}`}>
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-accent-red shrink-0"></div>
        {!collapsed && (
          <div className="min-w-0">
            <h1 className="text-2xl font-bold text-white font-cairo">TAHWUL</h1>
            <p className="text-xs text-white/70 mt-1 font-cairo">Driving Digital Transformation</p>
          </div>
        )}
      </div>
      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            title={collapsed ? item.name : undefined}
            onClick={onNavigate}
            className={({ isActive }) =>
              `flex items-center gap-[10px] px-[10px] py-[10px] rounded-[8px] transition-colors font-cairo font-medium text-[14px] capitalize h-[40px] ${
                collapsed ? 'justify-center' : ''
              } ${
                isActive
                  ? 'bg-[rgba(152,174,192,0.1)] text-white'
                  : 'text-sidebar-hover hover:bg-[rgba(152,174,192,0.1)] hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon src={item.icon} size={16} className="shrink-0" color={isActive ? 'white' : 'sidebar-hover'} />
                {!collapsed && <span className="leading-[16px] truncate">{item.name}</span>}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
