import { Box, Skeleton } from '@mui/material'

export default function MintHorizontalSkeleton({ extra }) {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        margin: '10px 0',
        boxSizing: 'border-box',
      }}>
      <Skeleton
        variant="rectangular"
        sx={{ width: '120px', height: '120px', marginRight: '20px', borderRadius: '5px' }}
      />
      <Box
        sx={{
          width: '60%',
        }}>
        <Skeleton sx={{ width: '100%' }} />
        <Skeleton sx={{ width: '50%' }} />
        <Box
          sx={{
            display: 'flex',
            // display: `${extra ? 'flex' : 'none'}`,
            justifyContent: 'space-between',
            marginTop: '25px',
          }}>
          <Skeleton sx={{ width: '45%', height: '50px' }} />
          <Skeleton sx={{ width: '45%', height: '50px' }} />
        </Box>
      </Box>
    </Box>
  )
}
