//packages
import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'

//modules
import ModeContext from './contexts/ModeContexts.js'
import useBrightness from './hooks/useBrightness'
import { Box } from '@mui/system'
//compoenents
import MintInner from './components/common/MintInner'
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
import Test from './pages/Test'
import Test2 from './pages/Test2'
import MintTicket from './pages/MintTicket.jsx'

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
        <Route path="/mypage/ticket/:id" element={<MintTicket />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/concert/date" element={<MintConcertDate />} />
        <Route path="/concert/area" element={<MintConcertArea />} />
        <Route path="/concert/seat" element={<MintConcertSeat />} />
        <Route path="/concert/payment" element={<MintConcertPayment />} />
        <Route path="/address" element={<MintAddress />} />
        {/* 트랜젝션 테스트 페이지 */}
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/test2" element={<Test2 />} />
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
