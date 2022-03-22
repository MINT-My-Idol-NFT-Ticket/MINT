//packages
import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
//compoenents
import Splash from './pages/intro/Splash.jsx'
import Intro from './pages/intro/Intro.jsx'
import MintConcertDate from './pages/MintConcertDate.jsx'
import MintHome from './pages/MintHome.jsx'
//modules
import ModeContext from './contexts/ModeContexts.js'
import useBrightness from './hooks/useBrightness'
import MintConcertArea from './pages/MintConcertArea.jsx'

function App({ mode }) {
  const [bright, setBright] = useBrightness()

  React.useEffect(() => {
    setBright(mode)
  }, [mode])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Splash />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<MintHome bright={bright} />} />
        <Route path="/concert/date" element={<MintConcertDate />} />
        <Route path="/concert/area" element={<MintConcertArea />} />
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
          // for button color
          primary: {
            // main purple
            main: '#8811DD',
            light: '#DECAEB',
          },
          secondary: {
            // secondary grey
            main: '#C4C4C4',
            contrastText: '#222831',
          },
        },
        typography: {
          fontFamily: 'Spoqa Han Sans Neo',
        },
      }),
    [mode],
  )

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '360px',
          margin: '0 auto',
          maxHeight: '645px',
          backgroundColor: mode === 'light' ? '#EEEEEE' : '#222831',
        }}>
        <ModeContext>
          <App mode={mode} />
        </ModeContext>
        <IconButton
          sx={{
            ml: 1,
            position: 'absolute',
            right: '5px',
            top: 0,
          }}
          onClick={colorMode.toggleColorMode}
          color="inherit">
          {mode === 'dark' ? (
            <Brightness7Icon style={{ color: 'EEEEEE' }} />
          ) : (
            <Brightness4Icon style={{ color: '222831' }} />
          )}
        </IconButton>
      </Box>
    </ThemeProvider>
  )
}
