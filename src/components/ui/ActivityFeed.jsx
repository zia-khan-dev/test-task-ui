export default function ActivityFeed({ activities }) {
  const getTimeAgo = (minutes) => {
    if (minutes < 60) return `${minutes} Mins Ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} Hour${hours > 1 ? 's' : ''} Ago`;
  };

  return (
    <div className="divide-y divide-border-color">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
          <div className="w-2 h-2 bg-error rounded-full mt-1.5 flex-shrink-0"></div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-normal text-primary font-cairo leading-[20px]">{activity.description}</p>
          </div>
          <span className="text-[14px] font-normal text-secondary font-cairo shrink-0">{getTimeAgo(activity.minutesAgo)}</span>
        </div>
      ))}
    </div>
  );
}
