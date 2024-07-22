import { Title, Text, Anchor, Container, Card, Image, Group, Avatar, Center, Space } from '@mantine/core';
import classes from './Welcome.module.css';
import { useState } from 'react';
import { GithubButton, LinkedinButton } from '../SocialButtons/SocialButtons';
import headShot from '../../assets/headshot.jpg'

export function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <Container size={300}>
      <Text ta="center" fw={700} size="xl">Welcome to Alan's <br /> home page!</Text>
      <Center>
        <Avatar src={headShot} radius="md" size="250" alt="A photo of Alan" />
      </Center>
      <Space h="xl" />
      <Card>
        <Text>This site is a construction zone! You will find bugs.</Text>
        <Center>
          <button onClick={() => setCount((count) => count + 1)}>
            click me {count}
          </button>
        </Center>
      </Card>

    </Container>
  )
}

export function OldWelcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Mantine
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
    </>
  );
}
