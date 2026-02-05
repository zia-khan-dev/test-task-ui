import Card from '../ui/Card';
import Gauge from '../ui/Gauge';

export default function ComplianceScore({ percentage }) {
  return (
    <Card title="Overall Compliance Score">
      <div className="flex justify-center py-2">
        <Gauge
          percentage={percentage}
          label="Basic Standards 2025"
          color="error"
          variant="semi"
        />
      </div>
    </Card>
  );
}
