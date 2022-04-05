import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRequest } from '../../api/requests'

import MintBtnGroup from '../common/MintBtnGroup'
import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'

export default function MintBuyList({ tokenIds }) {
  const navigate = useNavigate()
  const [buyList, setBuyList] = useState([])

  const getBuyList = async () => {
    const arr = []
    for (let i = 0; i < tokenIds.length; i++) {
      const response = await getRequest(`api/concert/contracts${tokenIds[i].contractAddress}`)
      console.log(response)
      arr.push(response.data)
    }
    setBuyList(buyList)
    console.log(buyList)
  }

  useEffect(() => {
    console.log(tokenIds)
    getBuyList()
  }, [tokenIds])

  const handleNavigation = id => {
    navigate(`/concert/detail/${id}`)
  }

  return (
    <Box>
      {buyList.length === 0
        ? [0, 0, 0, 0, 0].map((v, i) => <MintHorizontalSkeleton key={i} notOpen={false} />)
        : buyList &&
          buyList.map(concert => {
            ;<MintHorizontalCard
              key={concert.id}
              concertData={concert}
              passDetail={handleNavigation}></MintHorizontalCard>
          })}
    </Box>
  )
}
