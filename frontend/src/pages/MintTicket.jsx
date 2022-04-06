import React from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import MintSubHeader from '../components/header/MintSubHeader'
import MintTicketMoveBanner from '../components/ticket/MintTicketMoveBanner'
import MintTicket3D from '../components/ticket/MintTicket3D'

function MintTicket(props) {
  const location = useLocation()
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <MintSubHeader content="마이페이지" where="/mypage" />
      <MintTicketMoveBanner
        position="top"
        name={location.state.artists ? location.state.artists[0].name : 'undefined'}
      />
      <MintTicket3D concertData={location.state} />
      <MintTicketMoveBanner name={location.state.artists ? location.state.artists[0].name : 'undefined'} />
    </Box>
  )
}

export default MintTicket
