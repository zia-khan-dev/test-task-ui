import { useMemo } from 'react';
import {
  timelineItems,
  kpiData,
  progressCategories,
  topPerformers,
  recentActivities,
  monthlyPerformance,
  auditReadiness,
} from '../data/dashboardData';

const dashboardData = {
  timeline: timelineItems,
  kpi: kpiData,
  progressCategories,
  topPerformers,
  recentActivities,
  monthlyPerformance,
  auditReadiness,
};

export function useDashboardData() {
  return useMemo(() => dashboardData, []);
}
