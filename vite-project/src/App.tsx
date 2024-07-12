import { useState } from 'react'
import headShot from './assets/headshot.jpg'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Text, Card, Image, Group, Container, Center } from '@mantine/core';
import { HeaderSimple } from './lib/HeaderSimple/HeaderSimple';
import { GithubButton, LinkedinButton } from './lib/SocialButtons/SocialButtons';


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider defaultColorScheme="dark">
      <HeaderSimple />
      <Container style={{ width: '40%' }}>
        <div>
          <Card withBorder padding="lg" radius="md" shadow="sm">
            <Card.Section>
              <Image radius="5000" src={headShot} h="200" fit="contain" alt="A photo of Alan" />
            </Card.Section>
              <Group justify='center'>
                <GithubButton href="https://github.com/supercoolalan" >SuperCoolAlan</GithubButton>
                <LinkedinButton href="https://www.linkedin.com/in/alan-sandoval" />
              </Group>
          </Card>
        </div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            click me {count}
          </button>
        </div>
      </Container>
    </MantineProvider>
  )
}

export default App
