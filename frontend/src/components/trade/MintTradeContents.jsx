import '../../styles/MintTradeContents.css'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import checkNotAddress from '../../functions/util/checkNotAddress'
import { getRequest } from '../../api/requests'
import { useEffect, useState } from 'react'

import MintCard from '../common/MintCard'
import MintCollectionsSkeleton from '../skeleton/MintCollectionsSkeleton'
import { getMintTicketAddress, getSaleList, getSaleTicketPrice, getTokenURI } from '../../functions/erc/ERCfunctions'

export default function MintTradeContents() {
  const [metaData, setMedatData] = useState([])
  const navigate = useNavigate()
  const getSaleContractList = async () => {
    try {
      const response = await getRequest(`/api/concert/contracts`, { contract: 'salecontractaddress' })
      const saleTicket = []
      for (let saleContractelement of response.data) {
        const saleContractAddress = saleContractelement.saleContractAddress[0]
        const saletokenIdList = await getSaleList(saleContractAddress)
        const tokenIdArray = [...saletokenIdList]

        for (let j = 0; j < tokenIdArray.length; j++) {
          const ticketAddress = await getMintTicketAddress(saleContractAddress)
          const ticketTokenURI = await getTokenURI(ticketAddress, tokenIdArray[j])
          const response = await getRequest(`api/ticket/uriData/${ticketTokenURI}`)
          const price = await getSaleTicketPrice(saleContractAddress, tokenIdArray[j])
          saleTicket.push({ ...response.data, tokenId: tokenIdArray[j], saleContract: ticketAddress, price: price })
        }
      }
      setMedatData(saleTicket)
    } catch {
      navigate('/error404')
    }
  }

  useEffect(() => {
    if (checkNotAddress(() => navigate('/address'))) {
      getSaleContractList()
    }
  }, [])

  return (
    <div className="MintTrade__cardList">
      {metaData.length === 0 ? (
        <MintCollectionsSkeleton />
      ) : (
        <Grid container spacing={{ xs: 2 }}>
          {metaData.map(tokenURI => (
            <Grid
              item
              key={`${tokenURI.tokenId}-${tokenURI.contractAddress}`}
              xs={4}
              sx={{ width: '33.33%', height: '200px', borderRadius: '5px' }}>
              <MintCard tokenURI={tokenURI} />
              {/* <Button onClick={}></Button> */}
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}
