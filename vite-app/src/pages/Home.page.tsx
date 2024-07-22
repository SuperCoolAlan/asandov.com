import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderSimple } from '@/components/HeaderSimple/HeaderSimple';

export function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
    </>
  );
}
