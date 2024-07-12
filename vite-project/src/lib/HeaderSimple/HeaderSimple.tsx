import { useState } from 'react';
import { Container, Group, Burger, Image, SimpleGrid, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import tlatoaniLogo from '../../assets/Logo v1.png'

const links = [
  { link: '/about', label: 'Home' },
  { link: '/coffee', label: 'Espresso' },
  { link: '/grub', label: 'Gastronomy' },
  { link: '/vroom', label: 'Cars' },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

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
      <Container size="md" className={classes.inner}>
        <SimpleGrid cols={3}>
        <Text> Alan Sandoval's Home Page </Text>
          <Image h="48" fit="contain" src={tlatoaniLogo} alt="Tlatoani Technologies Logo" />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        </SimpleGrid>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
