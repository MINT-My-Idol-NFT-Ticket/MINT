import { useState } from 'react'
import { Box, Divider } from '@mui/material'
import { useLocation, useParams } from 'react-router-dom'
// components
import MintBtnGroup from '../components/common/MintBtnGroup'
import MintPayConcertInfo from '../components/concert/MintPayConcertInfo'
import MintPayPrice from '../components/concert/MintPayPrice'
import MintConcertAgree from '../components/concert/MintConcertAgree'
import MintConcertPaymentModal from '../components/concert/MintConcertPaymentModal'

function MintConcertPayment() {
  const concertId = useParams().id
  const location = useLocation()
  console.log(location, 'location')

  const [payOpen, setPayOpen] = useState(false)
  const handlePayOpen = () => setPayOpen(true)
  const handlePayClose = () => setPayOpen(false)

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
      <MintConcertAgree />
      <Box sx={{ padding: '20px 31px' }}>
<<<<<<< HEAD
        <MintConcertPaymentModal
          open={payOpen}
          handleClose={handlePayClose}
          concertInfo={{
            ...concertInfo,
            price: location.state.price,
            contractAddress: location.state.contractAddress,
            cids: location.state.cids,
          }}
        />
        <button onClick={handlePayOpen}>모달 켜줘</button>
        <MintBtnGroup
          prev={{ url: `/concert/seat/${concertId}`, content: '이전', color: 'secondary' }}
          next={{ url: ``, content: '결제' }}
=======
        <MintConcertPaymentModal open={payOpen} handleClose={handlePayClose} />
        <MintBtnGroup
          prev={{ url: `/concert/seat/${concertId}`, content: '이전', color: 'secondary' }}
          next={{ url: `/mypage`, content: '결제', handleClick: handlePayOpen }}
>>>>>>> c650fc5b704b8f9469d53a13c7f20e4582b132f9
          passData={location.state}
        />
      </Box>
    </Box>
  )
}

// styles
const container = { height: '100%', display: 'flex', flexDirection: 'column' }

export default MintConcertPayment
