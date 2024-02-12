import { useState } from 'react'
import './App.css'
import Controls from './components/Controls'
import { ThemeControls } from './components/ThemeControls'

function App() {
  const [themeState, setThemeState] = useState(false);
  const setTheme = () => {
    setThemeState(!themeState);
  }
  return (
    <div className={`app ${themeState ? 'theme-dark' : ''}`}>
      <ThemeControls setTheme={setTheme} />
      <div className="calculator-container">
        <Controls />
      </div>    
      </div>  
  )
}

export default App
