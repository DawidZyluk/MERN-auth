import { ThemeProvider } from '@mui/material'
import React from 'react'
import { themeOptions } from './theme'

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      
    </ThemeProvider>
  )
}

export default App