import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import tlatoaniLogo from './assets/Logo v1.png'
import './App.css'
import { HomeBanner } from './lib/HomeBanner/HomeBanner'

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { Container, MantineProvider, Image, Card } from '@mantine/core';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
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
