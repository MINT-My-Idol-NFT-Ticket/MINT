import '../../styles/MintTradeContents.css'
import { Grid } from '@mui/material'

import { getRequest } from '../../api/requests'
import { useEffect, useState } from 'react'
import { getSaleList } from '../../functions/erc/ERC721Calls'

import MintCard from '../common/MintCard'
import MintCollectionsSkeleton from '../skeleton/MintCollectionsSkeleton'

export default function MintTradeContents() {
  const [saleContractAddress, setSaleContractAddress] = useState([])

  const getSaleContractList = async () => {
    const response = await getRequest(`/api/concert/contracts`, { contract: 'salecontractaddress' })
    setSaleContractAddress(response.data)
    getOnSaleTicketTokens()
  }

  const getOnSaleTicketTokens = async () => {
    for (let i = 0; i < saleContractAddress.length; i++) {
      try {
        const saleList = await getSaleList(saleContractAddress[i])
        const tempOnSaleArray = []

        // for (let j = 0; j < parseInt(onSaleTicketArrayLength, 10).length; j++) {
        //   const ticketTokenId = await
        // }
      } catch (error) {
        console.error(error)
      }
    }
  }

  useEffect(() => {
    getSaleContractList()
  }, [])

  return (
    <div className="MintTrade__cardList">
      {testData.length === 0 ? (
        <MintCollectionsSkeleton />
      ) : (
        <Grid container spacing={{ xs: 2 }}>
          {testData.map(tokenId => (
            <Grid
              item
              key={`${tokenId.tokenId}-${tokenId.contractAddress}`}
              xs={4}
              sx={{ width: '33.33%', height: '200px', borderRadius: '5px' }}>
              <MintCard tokenId={tokenId} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  )
}

// 테스트 데이터
const testData = [
  {
    contractAddress: '0xFbda33F8883E5057Ad852b890d0919EFECD9CF1d',
    tokenId: '1',
  },
  {
    contractAddress: '0xB30B4c1625c86034b7C9eF1bBD7b5Bd9D70B926a',
    tokenId: '2',
  },
  {
    contractAddress: '0xb74e8F93448D7B9699bDAfa0bb88Bf6B1823906B',
    tokenId: '3',
  },
]
