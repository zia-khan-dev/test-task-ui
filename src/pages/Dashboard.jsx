import { useDashboardData } from '../hooks/useDashboardData';
import ProjectTimeline from '../components/dashboard/ProjectTimeline';
import OverallProgress from '../components/dashboard/OverallProgress';
import ProgressStatus from '../components/dashboard/ProgressStatus';
import ComplianceScore from '../components/dashboard/ComplianceScore';
import TopPerformers from '../components/dashboard/TopPerformers';
import RecentActivities from '../components/dashboard/RecentActivities';
import MonthlyPerformance from '../components/dashboard/MonthlyPerformance';
import AuditReadiness from '../components/dashboard/AuditReadiness';

export default function Dashboard() {
  const {
    timeline,
    kpi,
    progressCategories,
    topPerformers,
    recentActivities,
    monthlyPerformance,
    auditReadiness,
  } = useDashboardData();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-[16px] font-bold text-primary mb-2 font-cairo capitalize leading-[16px]">Dashboard</h1>
      </div>

      <ProjectTimeline items={timeline} />

      <OverallProgress kpi={kpi} />

      <ProgressStatus categories={progressCategories} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComplianceScore percentage={65} />
        <TopPerformers performers={topPerformers} />
        <RecentActivities activities={recentActivities} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MonthlyPerformance
          data={monthlyPerformance.data}
          labels={monthlyPerformance.labels}
        />
        <AuditReadiness
          percentage={auditReadiness.percentage}
          overdueStds={auditReadiness.overdueStds}
          missingEvidence={auditReadiness.missingEvidence}
        />
      </div>
    </div>
  );
}
