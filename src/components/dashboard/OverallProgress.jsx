import KPICard from '../ui/KPICard';
import { icons } from '../../utils/icons';

export default function OverallProgress({ kpi }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full">
      <KPICard
        label="Overall Progress"
        value={`${kpi.overallProgress}%`}
        icon={icons.chartBarLine}
      />
      <KPICard
        label="Total Criteria"
        value={kpi.totalCriteria}
        icon={icons.folder}
      />
      <KPICard
        label="Completed Criteria"
        value={kpi.completedCriteria}
        icon={icons.folderCheck}
      />
      <KPICard
        label="Evidence Documents"
        value={kpi.evidenceDocuments}
        icon={icons.fileSecurity}
      />
      <KPICard
        label="Evidence (Completed)"
        value={kpi.evidenceCompleted}
        icon={icons.fileVerified}
      />
      <KPICard
        label="Uploaded to DGA"
        value={kpi.uploadedToDGA}
        icon={icons.fileUpload}
      />
    </div>
  );
}
