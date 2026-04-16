import { useState } from 'react'
import Form from './Form'
import './App.css'
import ThemeContext from './ThemeContext'

export default function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form />
        <label>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          />
          Use Dark Mode
        </label>
        <div>
          {theme === 'light' ? "Enjoy Light Theme" : "Enjoy Dark Theme"}
        </div>
      </ThemeContext.Provider>
    </>
  )
}
