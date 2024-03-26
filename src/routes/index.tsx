import { createFileRoute, redirect } from '@tanstack/react-router';
import { DashboardContent } from '../features/dashboard/DashboardContent';

export const Route = createFileRoute('/')({
  component: () => <DashboardContent />,
  beforeLoad: async ({ location }) => {
    if (localStorage.getItem('accessToken') == null) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
