//packages
import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
//modules
import ModeContext from './contexts/ModeContexts.js'
import useBrightness from './hooks/useBrightness'
import MintConcertArea from './pages/MintConcertArea.jsx'
//compoenents
import { Box } from '@mui/system'
import MintSplash from './pages/MintSplash.jsx'
import MintIntro from './pages/MintIntro.jsx'
import MintAddress from './pages/MintAddress.jsx'
import MintConcertDate from './pages/MintConcertDate.jsx'
import MintHome from './pages/MintHome'
import MintSearch from './pages/MintSearch'
import MintSoon from './pages/MintSoon'

function App({ mode }) {
  const [bright, setBright] = useBrightness()

  React.useEffect(() => {
    setBright(mode)
  }, [mode])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MintSplash />} />
        <Route path="/intro" element={<MintIntro />} />
        <Route path="/home" element={<MintHome bright={bright} />} />
        <Route path="/search" element={<MintSearch bright={bright} />} />
        <Route path="/comming_soon" element={<MintSoon bright={bright} />} />
        <Route path="/concert/date" element={<MintConcertDate />} />
        <Route path="/concert/area" element={<MintConcertArea />} />
        <Route path="/address" element={<MintAddress />} />
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

  const modeStyle = {
    width: '28px',
    height: '28px',
    borderRadius: '100px',
    padding: '4px',
    boxShadow: '2px 2px 12px rgba(0,0,0,.4)',
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: 'relative',
          width: '360px',
          margin: '0 auto',
          height: '645px',
          backgroundColor: mode === 'light' ? '#EEEEEE' : '#222831',
        }}>
        <ModeContext>
          <App mode={mode} />
        </ModeContext>
        <IconButton
          sx={{
            position: 'absolute',
            right: '3px',
            top: '3px',
          }}
          size="small"
          onClick={colorMode.toggleColorMode}
          color="inherit">
          {mode === 'dark' ? (
            <LightModeIcon sx={{ ...modeStyle, backgroundColor: '#EEEEEE' }} style={{ color: '#222831' }} />
          ) : (
            <DarkModeIcon sx={{ ...modeStyle, backgroundColor: '#222831' }} style={{ color: '#EEEEEE' }} />
          )}
        </IconButton>
      </Box>
    </ThemeProvider>
  )
}
