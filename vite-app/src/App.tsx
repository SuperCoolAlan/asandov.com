import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { HeaderSimple } from './components/HeaderSimple/HeaderSimple';
import { FooterSocial } from './components/FooterSocial/FooterSocial';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router />
      <FooterSocial />
    </MantineProvider>
  );
}
