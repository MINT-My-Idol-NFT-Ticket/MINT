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
    try {
      const uri = await getTokenURI(tokenId.contractAddress, tokenId.tokenId)
      let response = ''
      if (uri) response = await getRequest(uri)
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
      {tokenURI == null || !tokenURI ? (
        <MintCollectionSingleSkeletion />
      ) : (
        <Card>
          {tokenURI === '' ? (
            <></>
          ) : (
            <CardMedia
              component="img"
              image={JSON.parse(tokenURI.data.img).gif}
              alt="nft사진"
              sx={{ height: '175px' }}
            />
          )}
        </Card>
      )}
    </Box>
  )
}
