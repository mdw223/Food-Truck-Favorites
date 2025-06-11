import { useState } from 'react'
import './App.css'
import IntroPage from './components/IntroPage'
import FoodTruckPage from './components/FoodTruckPage';

function App() {
  const [count, setCount] = useState(0)
  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
    <div className='intro-page-container'>
      {showIntro ? (
        <IntroPage count={count} 
            onSwitch={() => setShowIntro(false)}
            onCountChange={() => setCount(count + 1)} />
      ) : (
        <FoodTruckPage onSwitch={() => setShowIntro(true)}/>
      )}
    </div>
      
    </>
  )
}

export default App
