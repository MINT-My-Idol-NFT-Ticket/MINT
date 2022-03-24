//packages
import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
//modules
import ModeContext from './contexts/ModeContexts.js'
import useBrightness from './hooks/useBrightness'
import { Box } from '@mui/system'
//compoenents
import MintSplash from './pages/MintSplash.jsx'
import MintIntro from './pages/MintIntro.jsx'
import MintAddress from './pages/MintAddress.jsx'
import MintConcertDate from './pages/MintConcertDate.jsx'
import MintConcertArea from './pages/MintConcertArea.jsx'
import MintConcertSeat from './pages/MintConcertSeat.jsx'
import MintConcertPayment from './pages/MintConcertPayment.jsx'
import MintHome from './pages/MintHome'
import MintSearch from './pages/MintSearch'
import MintMyPage from './pages/MintMyPage'
import MintSoon from './pages/MintSoon'
import MintTrade from './pages/MintTrade.jsx'
import Admin from './pages/Admin'

function App({ setMode }) {
  const [bright, setBright] = useBrightness()

  React.useEffect(() => {
    setMode(bright)
  }, [bright])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MintSplash />} />
        <Route path="/intro" element={<MintIntro />} />
        <Route path="/home" element={<MintHome bright={bright} />} />
        <Route path="/search" element={<MintSearch bright={bright} />} />
        <Route path="/comming_soon" element={<MintSoon bright={bright} />} />
        <Route path="/mypage" element={<MintMyPage bright={bright} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/concert/date" element={<MintConcertDate />} />
        <Route path="/concert/area" element={<MintConcertArea />} />
        <Route path="/concert/seat" element={<MintConcertSeat />} />
        <Route path="/concert/payment" element={<MintConcertPayment />} />
        <Route path="/address" element={<MintAddress />} />
        <Route path="/trade" element={<MintTrade bright={bright} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default function MINT() {
  const [mode, setMode] = React.useState('light')

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
          info: {
            // info black
            main: '#000000',
            contrastText: '#EEEEEE',
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
          width: '100vw',
          height: '100vh',
          backgroundColor: 'gray',
        }}>
        <ModeContext>
          <Box
            sx={{
              position: 'relative',
              maxWidth: '700px',
              margin: '0 auto',
              height: '100vh',
              backgroundColor: mode === 'light' ? '#EEEEEE' : '#222831',
            }}>
            <App setMode={setMode} />
          </Box>
        </ModeContext>
      </Box>
    </ThemeProvider>
  )
}
