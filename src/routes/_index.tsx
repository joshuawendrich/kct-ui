import { createFileRoute, redirect } from '@tanstack/react-router';
import Layout from '../features/layout';

export const Route = createFileRoute('/_index')({
  component: () => <Layout />,
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
