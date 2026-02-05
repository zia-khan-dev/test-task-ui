import Card from '../ui/Card';
import Gauge from '../ui/Gauge';

export default function AuditReadiness({ percentage, overdueStds, missingEvidence }) {
  return (
    <Card title="Audit Readiness">
      <div className="flex flex-col items-center py-4">
        <Gauge
          percentage={percentage}
          label="Readiness Level"
          color="success"
        />
        <div className="mt-6 grid grid-cols-2 gap-4 w-full">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary font-cairo">{overdueStds}</p>
            <p className="text-sm text-secondary mt-1 font-cairo capitalize">Overdue Stds</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary font-cairo">{missingEvidence}</p>
            <p className="text-sm text-secondary mt-1 font-cairo capitalize">Missing Evidence</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
