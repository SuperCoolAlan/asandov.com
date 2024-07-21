import { useState } from 'react';
import { Container, Group, Burger, Image, Grid, Text, Center, Space, MantineTheme, Button, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import tlatoaniLogo from '../../assets/logotransparent.png'
import { theme } from '@/theme';
import { Link } from 'react-router-dom';
import { IconMoon, IconMoonFilled, IconMoonStars, IconSun, IconSunFilled } from '@tabler/icons-react';

const links = [
  { link: '/about', label: 'Home' },
  { link: '/coffee', label: 'Espresso' },
  { link: '/grub', label: 'Gastronomy' },
  { link: '/vroom', label: 'Cars' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));


  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Center>
          <Grid>
            <Grid.Col span={2}>
              <Image h="64" fit="contain" src={tlatoaniLogo} alt="Tlatoani Technologies Logo" />
            </Grid.Col>
            <Grid.Col span={8}>
              <Space h={18} />
              <Group justify='space-between' gap={5} visibleFrom="xs">
                {/* {items} */}
                <Button size="xs">newpage</Button>
              </Group>
            </Grid.Col>
            <Grid.Col span={2}>
              <Space h={24} />
              <ActionIcon onClick={() => toggleColorScheme()} size="sm">
                {colorScheme == 'dark' ? <IconSunFilled /> : <IconMoonStars />}
              </ActionIcon>
            </Grid.Col>
          </Grid>
        </Center>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
