import { Box } from '@mui/material'

import { BASE_URL } from '../../api/requests'

export default function MintConcertDetailContents({ concertData }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ width: '100%' }}>
        <img src={`${BASE_URL}${concertData.poster}`} style={{ width: '100%' }} alt="" />
      </Box>
      <Box sx={{ width: '100%' }}>
        <img src={`${BASE_URL}${concertData.detail}`} style={{ width: '100%', marginBottom: '60px' }} alt="" />
      </Box>
    </Box>
  )
}
