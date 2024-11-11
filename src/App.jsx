import { useState } from 'react'

import './App.css'
import { ToggleButton } from './components/ToggleBtn'
import { ToggleMessage } from './components/ToggleMessage'
import Toggle from './components/Toogle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toggle>
    <ToggleButton />
    <ToggleMessage />
    </Toggle>
    </>
  )
}

export default App
