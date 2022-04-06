import { Box, Skeleton } from '@mui/material'

import { BASE_URL } from '../../api/requests'

export default function MintConcertDetailContents({ concertData, loading }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ width: '100%' }}>
        {loading ? (
          <Skeleton variant="ractangular" sx={{ height: 200, marginBottom: 2 }} />
        ) : (
          <img src={`${BASE_URL}${concertData.poster}`} style={{ width: '100%' }} alt="" />
        )}
      </Box>
      {loading ? (
        <Skeleton variant="ractangular" sx={{ height: 400, marginBottom: 2 }} />
      ) : (
        <img src={`${BASE_URL}${concertData.detail}`} style={{ width: '100%' }} alt="" />
      )}
      <Box>
        {loading ? (
          <Skeleton variant="ractangular" sx={{ height: 200, marginBottom: 2 }} />
        ) : (
          <img src={`${BASE_URL}${concertData.section}`} style={{ width: '100%', marginBottom: '60px' }} alt="" />
        )}
      </Box>
      <Box sx={{ width: '100%' }}></Box>
    </Box>
  )
}
