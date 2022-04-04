import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getRequest } from '../../api/requests'

import MintHorizontalCard from '../common/MintHorizontalCard'
import MintHorizontalSkeleton from '../skeleton/MintHorizontalSkeleton'

export default function MintSoonContents() {
  const navigate = useNavigate()
  const [notOpenConcerts, setNotOpenConcerts] = useState([])

  const getNotOpenConcertList = async () => {
    const response = await getRequest('api/concert', { status: 0, size: 10 })
    setNotOpenConcerts(response.data)
  }
  useEffect(() => {
    getNotOpenConcertList()
  }, [])

  const handleNaviation = id => {
    navigate(`/concert/detail/${id}`)
  }

  return (
    <Box sx={{ padding: '14px 20px 0 20px' }}>
      {notOpenConcerts.length === 0
        ? [0, 0, 0, 0, 0].map((v, i) => <MintHorizontalSkeleton key={i} notOpen={false} />)
        : notOpenConcerts.map(concert => (
            <MintHorizontalCard key={concert.id} concertData={concert} passDetail={handleNaviation} />
          ))}
    </Box>
  )
}
