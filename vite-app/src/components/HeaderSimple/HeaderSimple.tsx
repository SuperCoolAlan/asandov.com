import { useState } from 'react';
import { Text, Container, Group, Burger, Image, Button, useMantineColorScheme, ActionIcon, Drawer, Flex, SimpleGrid, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import tlatoaniLogo from '../../assets/logotransparent.png'
import { IconMoonStars, IconSunFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const links = [
  { link: '/', label: 'Home' },
  { link: '/coffee', label: 'Espresso' },
  { link: '/about', label: 'About' }
  // { link: '/grub', label: 'Gastronomy' },
  // { link: '/vroom', label: 'Cars' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => (
    <Button
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

  const navbar = links.map((link) => (
    <Link
      to={link.link}
      key={link.label}
      className={classes.link}
      onClick={(event) => {
        setActive(link.link);
      }}>
      {link.label}
    </Link>
  ))


  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Drawer opened={opened} onClose={toggle} title="asandov.com" size="xs">
          <Stack justify='group-child-width' gap={0}>
            {navbar}
          </Stack>
        </Drawer>
        <Group justify='space-between'>
          <Burger opened={opened} onClick={toggle} size="sm" />
          <Image h="72" w="72" src={tlatoaniLogo} alt="Tlatoani Technologies Logo" />
          <ActionIcon onClick={() => toggleColorScheme()} size="sm" >
            {colorScheme == 'dark' ? <IconSunFilled /> : <IconMoonStars />}
          </ActionIcon>
        </Group>
      </Container>
    </header>
  );
}
