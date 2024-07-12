import { useState } from 'react'
import tlatoaniLogo from './assets/Logo v1.png'
import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider, Image, Card } from '@mantine/core';
import { HeaderSimple } from './lib/HeaderSimple/HeaderSimple';


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <HeaderSimple />
      <>
        <Card>
          <a href="https://asandov.com" target="_blank">
            <Image sizes='s' h="600" fit="contain" src={tlatoaniLogo} alt="Tlatoani Technologies Logo" />
          </a>
        </Card>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </>
    </MantineProvider>
  )
}

export default App
