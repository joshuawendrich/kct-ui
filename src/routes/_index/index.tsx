import { createFileRoute } from '@tanstack/react-router';
import Dashboard from '../../features/dashboard';

export const Route = createFileRoute('/_index/')({
  component: () => <Dashboard />,
});