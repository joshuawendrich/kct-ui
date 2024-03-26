import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_index/upload')({
  component: () => <div>Hello /_index/upload!</div>,
});
