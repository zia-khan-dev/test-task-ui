import Card from '../ui/Card';
import ActivityFeed from '../ui/ActivityFeed';

export default function RecentActivities({ activities }) {
  return (
    <Card title="Recent Activities">
      <ActivityFeed activities={activities} />
    </Card>
  );
}
