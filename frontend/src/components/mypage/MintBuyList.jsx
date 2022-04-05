import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRequest } from '../../api/requests'

import MintBtnGroup from '../common/MintBtnGroup'
import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'

export default function MintBuyList({ contractList }) {
  const navigate = useNavigate()
  const [buyList, setBuyList] = useState([])

  const getBuyList = async () => {
    const arr = []
    for (let i = 0; i < contractList.length; i++) {
      const response = await getRequest(`api/concert/contracts${contractList[i]}`)
      console.log(response.data[0])
      arr.push(response.data)
    }
    setBuyList(arr)
  }

  useEffect(() => {
    getBuyList()
  }, [])

  const handleNavigation = id => {
    navigate(`/concert/detail/${id}`)
  }

  return (
    <Box>
      {buyList.length === 0
        ? [0, 0, 0, 0, 0].map((v, i) => <MintHorizontalSkeleton key={i} notOpen={false} />)
        : buyList &&
          buyList.map((concert, index) => (
            <MintHorizontalCard
              key={`${concert.id}-${concert.startDate}-${index}`}
              concertData={concert[0]}
              passDetail={handleNavigation}>
              <Button variant="contained" disabled size="small" sx={{ width: '45%' }}>
                예매하기
              </Button>
            </MintHorizontalCard>
          ))}
    </Box>
  )
}
