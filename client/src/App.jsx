import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { themeOptions } from './theme'
import Header from './components/Header'
import HomePage from './screens/HomePage'

const App = () => {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <Header />
      <HomePage />
    </ThemeProvider>
  )
}

export default App