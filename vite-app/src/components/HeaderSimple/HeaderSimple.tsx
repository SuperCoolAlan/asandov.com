import { useState } from 'react';
import { Container, Group, Burger, Image, Grid, Text, Center, Space, MantineTheme, Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';
import tlatoaniLogo from '../../assets/logotransparent.png'
import { theme } from '@/theme';
import { Link } from 'react-router-dom';

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
      <Container size="xl" className={classes.inner}>
        <Center>
          <Grid grow>
            {/* <Grid.Col span={3}>
              <Text> Alan's Home Page </Text>
            </Grid.Col> */}
            <Grid.Col span={2}>
              <Image h="64" fit="contain" src={tlatoaniLogo} alt="Tlatoani Technologies Logo" />
            </Grid.Col>
            <Grid.Col span={10}>
              <Space h={18} />
              <Group justify='space-between' gap={5} visibleFrom="xs">
                {/* {items} */}
                <Button size="xs">newpage</Button>
              </Group>
            </Grid.Col>
          </Grid>
        </Center>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
