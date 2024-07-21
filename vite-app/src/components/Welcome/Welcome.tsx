import { Title, Text, Anchor, Container, Card, Image, Group, Avatar, Center, Space } from '@mantine/core';
import classes from './Welcome.module.css';
import { useState } from 'react';
import { GithubButton, LinkedinButton } from '../SocialButtons/SocialButtons';
import headShot from '../../assets/headshot.jpg'

export function Welcome() {
  const [count, setCount] = useState(0)

  return (
    <Container size={300}>
      <Center>
        <Text>Welcome to Alan's home page</Text>
      </Center>
      <Card withBorder padding="lg" radius="md" shadow="sm">
        <Card.Section>
          <Center>
            <Avatar src={headShot} radius="md" size="250" alt="A photo of Alan" />
          </Center>
        </Card.Section>
        <Space h="lg" />
        <Card.Section>
          <Group justify='center' gap="sm">
            <GithubButton href="https://github.com/supercoolalan" >SuperCoolAlan</GithubButton>
            <LinkedinButton href="https://www.linkedin.com/in/alan-sandoval" />
          </Group>
        </Card.Section>
      </Card>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        click me {count}
      </button> */}
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
