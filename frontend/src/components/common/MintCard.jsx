import { Card, CardMedia, CardActions, Typography, Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getTokenURI } from '../../functions/erc/ERCfunctions'
import { getRequest } from '../../api/requests'

import MintCollectionSingleSkeletion from '../skeleton/MintCollectionSingleSkeletion'

export default function MintCard2({ tokenId }) {
  const [tokenURI, setTokenURI] = useState(null)
  const navigate = useNavigate()
  console.log(tokenId)
  console.log(tokenURI)
  const showTicket = () => {
    navigate(`/trade/ticket`, { state: { ...tokenURI.data } })
  }
  const getURI = async () => {
    try {
      const uri = await getTokenURI(tokenId.contractAddress, tokenId.tokenId)
      let response = ''
      if (uri) response = await getRequest(uri)
      // if (uri) response = await getRequest(`/api/ticket/uriData/${uri}`)

      setTokenURI(response)
    } catch {
      navigate('/error404')
    }
  }

  useEffect(() => {
    getURI()
  }, [])

  return (
    <Box onClick={showTicket}>
      {tokenURI === null ? (
        <MintCollectionSingleSkeletion />
      ) : (
        <Card>
          {tokenURI !== '' ? (
            <></>
          ) : (
            <CardMedia component="img" image={JSON.parse(tokenId.img).gif} alt="nft사진" sx={{ height: '175px' }} />
          )}
        </Card>
      )}
    </Box>
  )
}
