import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import ModeContext from './contexts/ModeContexts.js'
import useBrightness from './hooks/useBrightness'
import { Box } from '@mui/system'
import { lightColor, darkColor } from './functions/util/color.js'

import MintInner from './components/common/MintInner'
import MintSplash from './pages/MintSplash'
import MintIntro from './pages/MintIntro'
import MintAddress from './pages/MintAddress'
import MintConcertDate from './pages/MintConcertDate'
import MintConcertArea from './pages/MintConcertArea'
import MintConcertSeat from './pages/MintConcertSeat'
import MintConcertPayment from './pages/MintConcertPayment'
import MintHome from './pages/MintHome'
import MintSearch from './pages/MintSearch'
import MintMyPage from './pages/MintMyPage'
import MintSoon from './pages/MintSoon'
import MintTrade from './pages/MintTrade'
import MintConcertDetail from './pages/MintConcertDetail'
import Admin from './pages/Admin'
import MintTicket from './pages/MintTicket.jsx'
import MintNotice from './pages/MintNotice.jsx'
import MintNotice3 from './components/notice/MintNotice3.jsx'
import MintNotice2 from './components/notice/MintNotice2.jsx'
import MintNotice1 from './components/notice/MintNotice1.jsx'
import MintTradeDetail from './pages/MintTradeDetail.jsx'
import MintConnectWallet from './pages/MintAddress'
import MintQR from './pages/MintQR'
import MintNotFound404 from './pages/MintNotFound404.jsx'

function App({ setMode }) {
  const [bright, _] = useBrightness()

  React.useEffect(() => {
    setMode(bright)
  }, [bright])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MintSplash />} />
        <Route path="/intro" element={<MintIntro />} />
        <Route path="/wallet" element={<MintConnectWallet />} />
        <Route path="/home" element={<MintHome />} />
        <Route path="/search" element={<MintSearch />} />
        <Route path="/comming_soon" element={<MintSoon />} />
        <Route path="/mypage" element={<MintMyPage />} />
        <Route path="/mypage/ticket" element={<MintTicket />} />
        <Route path="/admin" element={<Admin />} />
        <Route exact path="/concert/detail/:id" element={<MintConcertDetail />} />
        <Route path="/concert/date/:id" element={<MintConcertDate />} />
        <Route path="/concert/area/:id" element={<MintConcertArea />} />
        <Route path="/concert/seat/:id" element={<MintConcertSeat />} />
        <Route path="/concert/payment/:id" element={<MintConcertPayment />} />
        <Route path="/address" element={<MintAddress />} />
        <Route path="/notice" element={<MintNotice />} />
        <Route path="/notice/1" element={<MintNotice1 />} />
        <Route path="/notice/2" element={<MintNotice2 />} />
        <Route path="/notice/3" element={<MintNotice3 />} />
        <Route exact path="/trade" element={<MintTrade />} />
        <Route exact path="/trade/ticket" element={<MintTradeDetail />} />
        <Route path="/ticket/confirm" element={<MintQR />} />
        <Route path="/error404" element={<MintNotFound404 />} />
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
                  default: lightColor,
                  paper: lightColor,
                },
                text: {
                  primary: darkColor,
                  secondary: darkColor,
                },
              }
            : {
                // palette values for dark mode
                background: {
                  default: darkColor,
                  paper: darkColor,
                },
                text: {
                  primary: lightColor,
                  secondary: lightColor,
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
            contrastText: darkColor,
          },
          info: {
            // info black
            main: '#121212',
            contrastText: lightColor,
          },
        },
        typography: {
          fontFamily: 'Spoqa Han Sans Neo',
        },
        components: {
          MuiCalendarPicker: {
            styleOverrides: {
              root: {
                color: darkColor,
              },
            },
          },
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
          backgroundColor: 'black',
        }}>
        <ModeContext>
          <MintInner>
            <Box
              sx={{
                position: 'relative',
                flexGrow: 1,
                minWidth: '340px',
                margin: '0 auto',
                height: '100vh',
                backgroundColor: mode === 'light' ? lightColor : darkColor,
                overflow: 'hidden',
              }}>
              <App setMode={setMode} />
            </Box>
          </MintInner>
        </ModeContext>
      </Box>
    </ThemeProvider>
  )
}
