import Card from '../ui/Card';
import BarChart from '../ui/BarChart';

export default function MonthlyPerformance({ data, labels }) {
  return (
    
      
    <Card title="12-Month Performance" justifyBetween>
      <BarChart data={data} labels={labels} />
    </Card>
  );
}
