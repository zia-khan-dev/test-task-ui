import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { chartColors } from '../../utils/colors';

const colorMap = {
  error: chartColors.error,
  success: chartColors.success,
  warning: chartColors.warning,
  info: chartColors.info,
  primary: chartColors.primary,
};

const textColorMap = {
  error: 'text-error',
  success: 'text-success',
  warning: 'text-warning',
  info: 'text-info',
  primary: 'text-primary',
};

export default function Gauge({ percentage, label, subtitle, color = 'error', variant = 'semi' }) {
  const normalizedPercentage = Math.min(100, Math.max(0, percentage));
  const isSemi = variant === 'semi';

  const data = [
    { name: 'value', value: normalizedPercentage, fill: colorMap[color] },
    { name: 'empty', value: 100 - normalizedPercentage, fill: 'transparent' },
  ];

  const fullData = [
    { name: 'value', value: normalizedPercentage, fill: colorMap[color] },
    { name: 'empty', value: 100 - normalizedPercentage, fill: chartColors.borderColor },
  ];

  if (isSemi) {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="relative w-full max-w-[280px] h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius="80%"
                outerRadius="100%"
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                <Cell key="value" fill={colorMap[color]} />
                <Cell key="empty" fill={chartColors.borderColor} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 flex flex-col items-center pointer-events-none">
            <div className={`text-[44px] font-bold font-cairo leading-none ${textColorMap[color]}`}>
              {normalizedPercentage}%
            </div>
            {label && (
              <p className="text-[14px] font-normal text-secondary font-cairo mt-1">{label}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-[258px] h-[258px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={fullData}
              cx="50%"
              cy="50%"
              startAngle={90}
              endAngle={-270}
              innerRadius="70%"
              outerRadius="100%"
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              <Cell key="value" fill={colorMap[color]} />
              <Cell key="empty" fill={chartColors.borderColor} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`text-[44px] font-bold font-cairo ${textColorMap[color]}`}>
            {normalizedPercentage}%
          </div>
        </div>
      </div>
      {label && (
        <div className="mt-4 text-center">
          <p className="text-sm font-normal text-secondary font-cairo capitalize">{label}</p>
          {subtitle && <p className="text-xs text-secondary mt-1 font-cairo">{subtitle}</p>}
        </div>
      )}
    </div>
  );
}
