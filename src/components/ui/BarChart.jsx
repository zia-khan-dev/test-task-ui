import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { chartColors } from '../../utils/colors';

export default function BarChart({ data, labels }) {
  const chartData = labels.map((label, index) => ({
    name: label,
    value: data[index],
  }));

  return (
    <div className="w-full h-[198px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          data={chartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={chartColors.primary} />
              <stop offset="100%" stopColor={chartColors.info} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            stroke={chartColors.borderColor}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: chartColors.secondary, fontFamily: 'Cairo, sans-serif' }}
            interval={0}
          />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 20, 40, 60, 80, 100]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: chartColors.secondary, fontFamily: 'Cairo, sans-serif' }}
            width={24}
          />
          <Bar
            dataKey="value"
            fill="url(#barGradient)"
            radius={[4, 4, 0, 0]}
            maxBarSize={48}
          />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}
