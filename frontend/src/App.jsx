import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles'

import { Box, flexbox } from '@mui/system'
import MintHome from './pages/MintHome.jsx'
import Test from './pages/Test.jsx'
import MintConcertDate from './pages/MintConcertDate.jsx'

const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

function App() {
  const theme = useTheme()
  const colorMode = React.useContext(ColorModeContext)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MintHome />} />
        <Route path="/test" element={<Test />} />
        <Route path="/concert/date" element={<MintConcertDate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light')
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                background: {
                  default: '#EEEEEE',
                  paper: '#EEEEEE',
                },
                text: {
                  primary: '#222831',
                  secondary: '#222831',
                  disabled: '#222831',
                },
              }
            : {
                // palette values for dark mode
                background: {
                  default: '#222831',
                  paper: '#222831',
                },
                text: {
                  primary: '#EEEEEE',
                  secondary: '#EEEEEE',
                  disabled: '#EEEEEE',
                },
              }),
        },
      }),
    [mode],
  )

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: 'relative',
            width: '360px',
            margin: '0 auto',
            minHeight: '645px',
            backgroundColor: '#EEEEEE',
          }}>
          <App />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
