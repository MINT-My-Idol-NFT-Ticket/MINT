import '../../styles/MintTradeContents.css'
import { Button, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import checkNotAddress from '../../functions/util/checkNotAddress'
import { getRequest } from '../../api/requests'
import { useEffect, useState } from 'react'

import MintCard from '../common/MintCard'
import MintCollectionsSkeleton from '../skeleton/MintCollectionsSkeleton'
import { getMintTicketAddress, getSaleList, getTokenURI } from '../../functions/erc/ERCfunctions'

export default function MintTradeContents() {
  const [metaData, setMedatData] = useState([])
  const navigate = useNavigate()
  const getSaleContractList = async () => {
    try {
      const response = await getRequest(`/api/concert/contracts`, { contract: 'salecontractaddress' })
      const saleTicket = []
      for (let saleContractelement of response.data) {
        const saleContractTicketArray = []
        const saletokenIdList = await getSaleList(saleContractelement.saleContractAddress[0])
        const tempOnSaleArray = [...saletokenIdList]

        for (let j = 0; j < tempOnSaleArray.length; j++) {
          const ticketAddress = await getMintTicketAddress(saleContractelement.saleContractAddress[0])
          const ticketTokenURI = await getTokenURI(ticketAddress, tempOnSaleArray[j])
          const response = await getRequest(`api/ticket/uriData/${ticketTokenURI}`)
          saleTicket.push(response.data)
        }
      }
      setMedatData(saleTicket)
    } catch {
      // navigate('/error404')
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

// 테스트 데이터
const testData = [
  {
    area: '1',
    artists: `[{"id":32,"name":"Brave_Girls"}]`,
    date: '2022-01-15',
    img: `{"gif":"http://j6b108.p.ssafy.io:9090/files/URIImg/5fd90fb6-c393-49d7-b3f3-27b91ba867c6_3.gif","mp4":"http://j6b108.p.ssafy.io:9090/files/URIImg/98131de8-e712-402e-bd46-c202cab267d1_3.mp4"}`,
    place: '올림픽공원',
    price: '12',
    seat: '{"id":26784,"seat":"8","status":0}',
    time: '18:00',
    title: '2022 Brave Girls 1st CONCERT ［THE BRAVE GIRLS SHOW］',
  },
]
