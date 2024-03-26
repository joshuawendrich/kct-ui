import { createFileRoute } from '@tanstack/react-router';
import SignIn from '../features/login/SignIn';

export const Route = createFileRoute('/login')({
  component: () => <SignIn />,
});
