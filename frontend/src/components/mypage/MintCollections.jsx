import { Grid, Typography } from '@mui/material'

import MintCard2 from '../common/MintCard2'
import MintCollectionsSkeleton from '../skeleton/MintCollectionsSkeleton'

export default function MintCollections({ tokenIds, loading }) {
  return (
    <>
      {loading ? (
        <MintCollectionsSkeleton />
      ) : (
        <>
          {tokenIds.length === 0 ? (
            <Typography
              sx={{
                color: 'text.primary',
                opacity: '.5',
                position: 'absolute',
                top: '55%',
                left: '50%',
                transform: 'translate(-50%)',
              }}>
              아직 컬렉션이 없습니다
            </Typography>
          ) : (
            <Grid container spacing={{ xs: 2 }}>
              {tokenIds.map(tokenId => (
                <Grid
                  item
                  key={`${tokenId.tokenIds}-${tokenId.contractAddress}`}
                  xs={4}
                  sx={{ width: '33.33%', height: '200px', borderRadius: '5px' }}>
                  <MintCard2 tokenId={tokenId} />
                </Grid>
              ))}
            </Grid>
          )}
        </>
      )}
    </>
  )
}
