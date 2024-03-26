import { createFileRoute } from '@tanstack/react-router';
import { DashboardContent } from '../../features/dashboard/DashboardContent';

export const Route = createFileRoute('/_index/')({
  component: () => <DashboardContent />,
});
