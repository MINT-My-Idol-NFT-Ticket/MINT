import { Grid } from '@mui/material'

import MintCard2 from '../common/MintCard2'
import MintCollectionsSkeleton from '../skeleton/MintCollectionsSkeleton'

export default function MintCollections({ tokenIds }) {
  console.log(tokenIds)
  return (
    <>
      {tokenIds.length === 0 ? (
        <MintCollectionsSkeleton />
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
  )
}
