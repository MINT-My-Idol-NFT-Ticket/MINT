import { Box, Typography } from '@mui/material'
import React from 'react'

function MintQR({ concertData }) {
  const url = 'http://j6b108.p.ssafy.io/mypage/ticket/1'

  return (
    <Box sx={{ width: '340px', height: '340px', color: 'white' }}>
      <Typography sx={{ fontSize: '10px', marginBottom: '2px' }}>Original NFT ticket</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid white' }}>
        <Box sx={{ margin: '0 auto', padding: '14px' }}>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=120x120`} />
        </Box>
        <Box sx={container}>
          <Typography sx={title}>TITLE</Typography>
          <Typography sx={content}>{concertData.title}</Typography>
        </Box>
        <Box sx={container}>
          <Typography sx={title}>ARTIST</Typography>
          <Typography sx={content}>empty</Typography>
        </Box>
        <Box sx={container}>
          <Typography sx={title}>SEAT</Typography>
          <Typography sx={content}>{concertData.section}</Typography>
        </Box>
        <Box sx={container}>
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              borderRight: '1px solid white',
              paddingRight: '4px',
            }}>
            <Typography sx={title}>DATE</Typography>
            <Typography sx={content}>{concertData.date}</Typography>
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'space-between', paddingLeft: '6px' }}>
            <Typography sx={title}>TIME</Typography>
            <Typography sx={content}>empty</Typography>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ fontSize: '10px', margin: '2px 2px 0 2px', float: 'right', color: 'rgba(255, 255,255, 0.3)' }}>
        This ticket was minted by MINT(MyIdolNftTicket)
      </Typography>
    </Box>
  )
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 12px',
  // margin: '12px 0',
  borderTop: '1px solid white',
  lineHeight: '45px',
}
const title = { fontSize: '8px', lineHeight: '24px' }
const content = { fontSize: '12px', marginRight: '6px', lineHeight: '24px' }

export default MintQR
