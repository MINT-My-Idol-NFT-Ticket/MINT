import './App.css'
import { useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import { Button } from '@mui/material'

const getDesignTokens = mode => ({
  palette: {
    primary: '#8811DD',
    secondary: '#BC8CF2',
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
})

const theme = useMemo(() => createTheme(getDesignTokens('light')), [])

function App() {
  //   const [mode, setMode] = useState('light')
  //   const colorMode = useMemo(
  //     () => ({
  //       // The dark mode switch would invoke this method
  //       toggleColorMode: () => {
  //         setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
  //       },
  //     }),
  //     [],
  //   )
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        ashdfskdjfhjksahfsdaklfh
        <Button color="primary">adsf</Button>
      </div>
    </ThemeProvider>
  )
}

export default App
