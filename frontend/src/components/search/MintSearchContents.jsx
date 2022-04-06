import { Box, Typography } from '@mui/material'

import MintHorizontalCard from '../common/MintHorizontalCard'

export default function MintSearchContents({ searchList }) {
  return (
    <Box sx={{ padding: '0 20px' }}>
      <Box>
        {searchList.length !== 0 ? (
          searchList.map(concert => <MintHorizontalCard key={concert.id} concertData={concert} />)
        ) : (
          <Typography
            sx={{
              color: 'text.primary',
              opacity: '.5',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%)',
            }}>
            검색결과가 없습니다
          </Typography>
        )}
      </Box>
    </Box>
  )
}
