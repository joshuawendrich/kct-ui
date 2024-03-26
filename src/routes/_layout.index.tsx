import { createFileRoute, redirect } from '@tanstack/react-router';
import Dashboard from '../features/dashboard/Dashboard';

export const Route = createFileRoute('/_layout')({
  component: () => <Dashboard />,
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
