import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MintBanner from './MintBanner'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Skeleton } from '@mui/material'

import { getRequest } from '../../api/requests.js'
import getRandomItem from '../../functions/util/getRandomItem'

import MintVerticalCard from '../common/MintVerticalCard'
import MintVerticalSkeleton from '../skeleton/MintVerticalSkeleton'

export default function MintHomeContents() {
  const navigate = useNavigate()
  const pushCommingSoon = () => navigate('/comming_soon')
  const [openConcerts, setOpenConcerts] = useState([])
  const [notOpenConcerts, setNotOpenConcerts] = useState([])

  const getOpenConcertList = async () => {
    try {
      const response = await getRequest('api/concert', { status: 1, size: 20, page: 0 })
      setOpenConcerts(getRandomItem(response.data, 3))
    } catch {
      navigate('/error404')
    }
  }
  const getNotOpenConcertList = async () => {
    try {
      const response = await getRequest('api/concert', { status: 0, size: 20, page: 0 })
      setNotOpenConcerts(getRandomItem(response.data, 4))
    } catch {
      navigate('/error404')
    }
  }

  useEffect(() => {
    getOpenConcertList()
    getNotOpenConcertList()
  }, [])

  return (
    <>
      {notOpenConcerts.length === 0 ? <Skeleton variant="ractangular" sx={{ height: '100px' }} /> : <MintBanner />}
      <Box sx={{ padding: '10px 20px 0 20px' }}>
        {openConcerts.length === 0
          ? [0, 0, 0, 0].map((v, i) => <MintVerticalSkeleton key={i} notOpen={false} />)
          : openConcerts.map(concert => <MintVerticalCard key={concert.id} concertData={concert} notOpen={false} />)}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 20px 0 20px',
          margin: '80px 0 10px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        onClick={pushCommingSoon}>
        <p style={{ fontSize: '20px' }}>오픈 예정</p>
        <ChevronRightIcon />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          padding: '0 20px',
          boxSizing: 'border-box',
        }}>
        {notOpenConcerts.length === 0 ? (
          <Grid container spacing={2.5}>
            {[0, 0, 0, 0].map((v, i) => (
              <Grid key={i} item xs={6}>
                <MintVerticalSkeleton notOpen={true} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2.5}>
            {notOpenConcerts.map(concert => (
              <Grid key={concert.id} item xs={6}>
                <MintVerticalCard concertData={concert} notOpen={true} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  )
}
