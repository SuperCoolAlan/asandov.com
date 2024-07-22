import { useState } from 'react';
import { Container, Group, Burger, Image, Grid, Center, Space, Button, useMantineColorScheme, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import tlatoaniLogo from '../../assets/logotransparent.png'
import { theme } from '@/theme';
import { IconMoonStars, IconSunFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/coffee', label: 'Espresso' },
  { link: '/work', label: 'About' }
  // { link: '/grub', label: 'Gastronomy' },
  // { link: '/vroom', label: 'Cars' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <Button
      color={theme.black}
      component={Link}
      size="sm"
      key={link.label}
      to={link.link}
      className={classes.link}
      // data-active={active === link.link || undefined} //TODO: fix routing and read current page to set active
      onClick={(event) => {
        // event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </Button>
  ));


  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Center>
          <Grid>
            {/* <Grid.Col span={1} >

            </Grid.Col> */}
            <Grid.Col span={3}>
              <Space h={18} />
              <Image h="64" w="64" src={tlatoaniLogo} alt="Tlatoani Technologies Logo" />
            </Grid.Col>
            <Grid.Col span={6}>
              <Space h={18} />
              <Group justify='space-between' gap={3} visibleFrom="xs">
                {items}
              </Group>
            </Grid.Col>
            <Grid.Col span={2}>

            </Grid.Col>
            <Grid.Col span={1}>
              <Space h={24} />
              <ActionIcon onClick={() => toggleColorScheme()} size="sm" visibleFrom='xs'>
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
