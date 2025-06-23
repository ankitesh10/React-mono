import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';
import Button from 'shared-ui/Button';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <div>
      <Button onClick={() => console.log('hello')}>CLick</Button>
    </div>
  );
}
