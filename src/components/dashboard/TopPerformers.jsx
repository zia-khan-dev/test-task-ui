import Card from '../ui/Card';
import PersonAvatar from '../ui/PersonAvatar';

export default function TopPerformers({ performers }) {
  return (
    <Card title="Top Performing Perspective Leaders">
      <div className="divide-y divide-border-color">
        {performers.map((performer, index) => (
          <div key={index} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
            <PersonAvatar />
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
