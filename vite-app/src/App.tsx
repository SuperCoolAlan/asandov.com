import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { HeaderSimple } from './components/HeaderSimple/HeaderSimple';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <HeaderSimple />
      <Router />
    </MantineProvider>
  );
}
