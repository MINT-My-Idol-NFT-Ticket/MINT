import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MintBanner from './MintBanner'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import '../../styles/MintHomeContents.css'
import { getRequest } from '../../api/Request.js'

import MintVerticalCard from '../common/MintVerticalCard'
import MintVerticalSkeleton from '../skeleton/MintVerticalSkeleton'
import { Skeleton } from '@mui/material'

export default function MintHomeContents() {
  const navigate = useNavigate()
  const pushCommingSoon = () => navigate('/comming_soon')
  const [openConcerts, setOpenConcerts] = useState([])
  const [notOpenConcerts, setNotOpenConcerts] = useState([])

  const getOpenConcertList = async () => {
    const response = await getRequest('api/concert', { status: 1 })
    setOpenConcerts(response.data)
  }
  const getNotOpenConcertList = async () => {
    const response = await getRequest('api/concert', { status: 0 })
    setNotOpenConcerts(response.data)
  }

  useEffect(() => {
    getOpenConcertList()
    getNotOpenConcertList()
  }, [])

  return (
    <>
      {notOpenConcerts.length === 0 ? <Skeleton variant="ractangular" sx={{ height: '100px' }} /> : <MintBanner />}
      {openConcerts.length === 0 ? (
        <MintVerticalSkeleton />
      ) : (
        openConcerts.map(concert => <MintVerticalCard key={concert.id} concertData={concert} notOpen={false} />)
      )}
      <div className="MintHome__subTitle">
        <p>오픈 예정</p>
        <ChevronRightIcon onClick={pushCommingSoon} />
      </div>
      <div className="MintHome__notOpenList">
        {notOpenConcerts.length === 0 ? (
          <MintVerticalSkeleton />
        ) : (
          <Grid container>
            {notOpenConcerts.map(concert => (
              <Grid key={concert.id} item xs={6}>
                <MintVerticalCard concertData={concert} notOpen={true} />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  )
}
