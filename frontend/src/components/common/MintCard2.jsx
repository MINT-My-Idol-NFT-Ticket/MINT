import { Card, CardMedia, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTokenURI } from '../../functions/erc/ERCfunctions'
import { getRequest } from '../../api/requests'

import MintCollectionSingleSkeletion from '../skeleton/MintCollectionSingleSkeletion'

export default function MintCard2({ tokenId }) {
  const [tokenURI, setTokenURI] = useState(null)
  const navigate = useNavigate()
  const showTicket = () => {
    navigate(`/mypage/ticket`, { state: { ...tokenURI.data } })
  }
  const getURI = async () => {
    const uri = await getTokenURI(tokenId.contractAddress, tokenId.tokenId)
<<<<<<< HEAD
    let response = ''
=======
    let response
>>>>>>> ae3a69b9494a99a919bd6209374dc7bcd470f41f
    if (uri) response = await getRequest(uri)
    setTokenURI(response)
  }

  useEffect(() => {
    getURI()
  }, [])

  return (
    <Box onClick={showTicket}>
      {tokenURI == null || !tokenURI ? (
        <MintCollectionSingleSkeletion />
      ) : (
        <Card>
          {tokenURI === '' ? (
            <></>
          ) : (
            <CardMedia component="img" image={tokenURI.data.img.gif} alt="nft사진" sx={{ height: '175px' }} />
          )}
        </Card>
      )}
    </Box>
  )
}
