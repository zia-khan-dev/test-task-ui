import { memo } from 'react';
import { Icon } from '../../utils/icons';

function KPICard({ label, value, icon, trend, trendValue }) {
  return (
    <div className="bg-white rounded-[10px] border border-border-color min-h-[80px] w-full flex items-center p-4 relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 min-w-0">
          <p className="text-[24px] font-bold text-primary font-cairo leading-[16px] mb-1">{value}</p>
          <p className="text-[14px] text-secondary font-cairo font-normal capitalize leading-[16px]">{label}</p>
          {trend && (
            <p className={`text-xs mt-2 font-cairo ${trend === 'up' ? 'text-success' : 'text-error'}`}>
              {trend === 'up' ? '↑' : '↓'} {trendValue}
            </p>
          )}
        </div>
        {icon && (
          <div className="ml-4 flex-shrink-0">
            <Icon src={icon} size={24} color="error" />
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(KPICard);
