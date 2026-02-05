import Card from '../ui/Card';

function AvatarInitials({ name }) {
  const parts = name.trim().split(/\s+/);
  const initials = parts.length >= 2
    ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    : name.slice(0, 2).toUpperCase();
  return (
    <div className="w-12 h-12 rounded-full bg-background-light border border-border-color flex items-center justify-center flex-shrink-0">
      <span className="text-[14px] font-bold text-primary font-cairo">{initials}</span>
    </div>
  );
}

export default function TopPerformers({ performers }) {
  return (
    <Card title="Top Performing Perspective Leaders">
      <div className="divide-y divide-border-color">
        {performers.map((performer, index) => (
          <div key={index} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
            <AvatarInitials name={performer.name} />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-bold text-primary font-cairo leading-[20px]">{performer.name}</p>
              <p className="text-[14px] font-normal text-secondary font-cairo leading-[20px]">{performer.role}</p>
            </div>
            <span className="text-[14px] font-bold text-primary font-cairo leading-[20px] shrink-0">{performer.percentage}%</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
