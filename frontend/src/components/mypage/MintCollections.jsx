import MintCard2 from '../common/MintCard2'

import MintCollectionsSkeleton from '../skeleton/MintCollectionsSkeleton'

export default function MintCollections({ tokenIds }) {
  return (
    <>
      {tokenIds.length === 0 ? (
        <MintCollectionsSkeleton />
      ) : (
        tokenIds.map(tokenId => <MintCard2 key={`${tokenId.tokenIds}-${tokenId.contractAddress}`} tokenId={tokenId} />)
      )}
    </>
  )
}
