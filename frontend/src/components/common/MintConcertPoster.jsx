import { Box } from '@mui/material'

export default function MintConcertPoster({ imgUrl }) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '80px',
        minHeight: '80px',
        borderRadius: '10px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}>
      <img src={imgUrl} style={{ width: '100%' }} alt="" />
    </Box>
  )
}
