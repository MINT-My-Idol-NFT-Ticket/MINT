import { Box, Typography } from '@mui/material'
import React from 'react'

function MintQR({ concertData }) {
  console.log(concertData, '뒷면정보')
  const url = 'http://j6b108.p.ssafy.io/mypage/ticket/1'

  return (
    <Box sx={{ width: '340px', color: 'white' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ marginBottom: '2px', fontSize: '4px' }}>Original NFT ticket</Typography>
        <Typography sx={{ fontSize: '4px' }}>MINT</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', border: '1px solid white' }}>
        <Box sx={{ margin: '0 auto', padding: '14px' }}>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=110x110`} />
        </Box>
        <Box sx={container}>
          <Typography sx={title}>TITLE</Typography>
          <Typography sx={content}>{concertData.title}</Typography>
        </Box>
        <Box sx={container}>
          <Typography sx={title}>ARTIST</Typography>
          <Typography sx={content}>{concertData.artists ? concertData.artists[0].name : 'undefined'}</Typography>
        </Box>
        <Box sx={container}>
          <Typography sx={title}>SEAT</Typography>
          <Typography sx={content}>
            {concertData.section}-{concertData.seat ? concertData.seat.seat : 'undefined'}
          </Typography>
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
            <Typography sx={content}>{concertData.time ? concertData.time : 'undefined'}</Typography>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ fontSize: '10px', margin: '2px 2px 0 2px', float: 'right', color: 'rgba(255, 255,255, 0.3)' }}>
        This ticket was created by MINT(MyIdolNftTicket)
      </Typography>
    </Box>
  )
}

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 14px',
  borderTop: '1px solid white',
  lineHeight: '45px',
}
const title = { flex: 1, fontSize: '8px', lineHeight: '24px' }
const content = { flex: 4, fontSize: '12px', lineHeight: '24px', textAlign: 'right' }

export default MintQR
