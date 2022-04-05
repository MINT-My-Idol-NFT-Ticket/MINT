import { useState } from 'react'
import { Box, Divider } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'

import { confirmMessageNoBtn } from '../functions/alert/alertFunctions'

import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPayConcertInfo from '../components/concert/MintPayConcertInfo'
import MintPayPrice from '../components/concert/MintPayPrice'
import MintConcertAgree from '../components/concert/MintConcertAgree'
import MintConcertPaymentModal from '../components/concert/MintConcertPaymentModal'
import useBrightness from '../hooks/useBrightness'

function MintConcertPayment() {
  const concertId = useParams().id
  const location = useLocation()
  const [bright, _] = useBrightness()

  const [payOpen, setPayOpen] = useState(false)
  const [agreement, setAgreement] = useState(false)

  const handlePayOpen = () => {
    if (agreement === true) {
      setPayOpen(true)
    } else {
      confirmMessageNoBtn('약관에 모두 동의해주세요', null, bright)
    }
  }
  const handlePayClose = () => setPayOpen(false)

  console.log(location.state.seat)

  const concertInfo = {
    img: location.state.poster,
    title: location.state.title,
    place: location.state.place,
    date: location.state.time.date,
    time: location.state.time.time,
    area: location.state.area.area,
    seat: location.state.seat,
    price: location.state.price,
  }

  return (
    <Box sx={container}>
      <MintPayConcertInfo concertInfo={concertInfo} />
      <MintPayPrice price={location.state.price} />
      <Divider />
      <MintConcertAgree setAgreement={setAgreement} />
      <Box sx={{ padding: '20px 31px' }}>
        <MintConcertPaymentModal
          open={payOpen}
          handleClose={handlePayClose}
          concertInfo={{ ...concertInfo, contractAddress: location.state.contractAddress, cids: location.state.cids }}
        />
        <MintBtnGroup
          prev={{ url: `/concert/seat/${concertId}`, content: '이전', color: 'secondary' }}
          next={{ url: `/mypage`, content: '결제', handleClick: handlePayOpen }}
          passData={location.state}
        />
      </Box>
    </Box>
  )
}

// styles
const container = { height: '100%', display: 'flex', flexDirection: 'column' }

export default MintConcertPayment
