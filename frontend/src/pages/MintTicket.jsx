import React from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

import removeUnderBar from '../functions/util/removeUnderBar'

import MintSubHeader from '../components/header/MintSubHeader'
import MintTicketMoveBanner from '../components/ticket/MintTicketMoveBanner'
import MintTicket3D from '../components/ticket/MintTicket3D'
import MintSaleBtn from '../components/ticket/MintSaleBtn'

function MintTicket() {
  document.title = 'MINT - 티켓'

  const location = useLocation()
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      <MintSubHeader content="내 컬렉션" where="/mypage" />
      <MintTicketMoveBanner position="top" name={removeUnderBar(JSON.parse(location.state.artists)[0].name)} />
      <MintTicket3D concertData={location.state} />
      <MintTicketMoveBanner name={removeUnderBar(JSON.parse(location.state.artists)[0].name)} />
      <MintSaleBtn concertId={location.state.concertId} tokenId={location.state.tokenId} />
    </Box>
  )
}

export default MintTicket
