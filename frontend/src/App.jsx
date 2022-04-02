import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

import ModeContext from './contexts/ModeContexts.js'
import useBrightness from './hooks/useBrightness'
import { Box } from '@mui/system'

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
import Test from './pages/Test'
import Test2 from './pages/Test2'
import Test3 from './pages/Test3'
import MintTicket from './pages/MintTicket.jsx'
import MintNotice from './pages/MintNotice.jsx'
import MintNotice3 from './components/notice/MintNotice3.jsx'
import MintNotice2 from './components/notice/MintNotice2.jsx'
import MintNotice1 from './components/notice/MintNotice1.jsx'
import MintTradeDetail from './pages/MintTradeDetail.jsx'
import MintConnectWallet from './pages/MintAddress'

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
        <Route path="/wallet" element={<MintConnectWallet />} />
        <Route path="/home" element={<MintHome bright={bright} />} />
        <Route path="/search" element={<MintSearch bright={bright} />} />
        <Route path="/comming_soon" element={<MintSoon bright={bright} />} />
        <Route path="/mypage" element={<MintMyPage bright={bright} />} />
        <Route path="/mypage/ticket/:id" element={<MintTicket />} />
        <Route path="/admin" element={<Admin />} />
        <Route exact path="/concert/detail/:id" element={<MintConcertDetail bright={bright} />} />
        <Route path="/:id/concert/date" element={<MintConcertDate />} />
        <Route path="/:id/concert/area" element={<MintConcertArea />} />
        <Route path="/concert/seat" element={<MintConcertSeat />} />
        <Route path="/concert/payment" element={<MintConcertPayment />} />
        <Route path="/address" element={<MintAddress />} />
        <Route path="/notice" element={<MintNotice />} />
        <Route path="/notice/1" element={<MintNotice1 />} />
        <Route path="/notice/2" element={<MintNotice2 />} />
        <Route path="/notice/3" element={<MintNotice3 />} />
        {/* 트랜젝션 테스트 페이지 */}
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/test2" element={<Test2 />} />
        <Route exact path="/test3" element={<Test3 />} />
        <Route exact path="/trade" element={<MintTrade bright={bright} />} />
        <Route exact path="/trade/ticket/:id" element={<MintTradeDetail bright={bright} />} />
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
                  // disabled: '#222831',
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
                  // disabled: '#EEEEEE',
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
        components: {
          MuiCalendarPicker: {
            styleOverrides: {
              root: {
                color: '#222831',
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
          backgroundColor: 'gray',
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
                backgroundColor: mode === 'light' ? '#EEEEEE' : '#222831',
              }}>
              <App setMode={setMode} />
            </Box>
          </MintInner>
        </ModeContext>
      </Box>
    </ThemeProvider>
  )
}
