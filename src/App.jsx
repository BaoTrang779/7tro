import { useState } from 'react'
import './App.css'
import './layout/MainHeader'
import MainHeader from './layout/MainHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='header'>
    <MainHeader />
    </div>
  )
}

export default App
