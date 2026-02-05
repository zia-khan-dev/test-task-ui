import { Link } from 'react-router-dom';
import { chartColors } from '../../utils/colors';

function MiniGauge({ percentage, color }) {
  const normalized = Math.min(100, Math.max(0, percentage));
  const r = 28;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (normalized / 100) * circumference;
  const strokeColor = color === 'success' ? chartColors.success : chartColors.primary;

  return (
    <div className="relative w-16 h-16 shrink-0">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} stroke={chartColors.borderColor} strokeWidth="6" fill="none" />
        <circle
          cx="32"
          cy="32"
          r={r}
          stroke={strokeColor}
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[14px] font-bold text-primary font-cairo">{normalized}%</span>
      </div>
    </div>
  );
}

export default function PerspectiveCard({ category, title, description, progress = 0, to, onClick }) {
  const content = (
    <div className="flex items-start gap-4 p-6">
      <div className="flex-1 min-w-0">
        <span className="inline-block px-3 py-1 rounded-full bg-background-light border border-border-color text-[12px] font-normal text-primary font-cairo mb-2">
          {category}
        </span>
        <h3 className="text-[16px] font-bold text-primary font-cairo leading-[22px]">{title}</h3>
        <p className="text-[14px] font-normal text-secondary font-cairo mt-1 leading-[20px] line-clamp-2">
          {description}
        </p>
      </div>
      <MiniGauge percentage={progress} color="success" />
    </div>
  );

  const className = "bg-white rounded-[10px] border border-border-color hover:border-primary/30 transition-colors block text-left w-full";

  if (to) {
    return (
      <Link to={to} className={className}>
        {content}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {content}
      </button>
    );
  }
  return <div className={className}>{content}</div>;
}
