import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRequest } from '../api/requests'
import { Box, Skeleton } from '@mui/material'

import MintSubHeader from '../components/header/MintSubHeader'
import MintConcertDetailContents from '../components/concert/MintConcertDetailContents'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtn from '../components/common/MintBtn'
import MintDetailSkeleton from '../components/skeleton/MintDetailSkeleton'

export default function MintConcertDetail({ bright }) {
  const [concertData, setConcertData] = useState(null)
  const id = useParams().id

  useEffect(async () => {
    const response = await getRequest(`api/concert/${id}`)

    setConcertData(response.data)
  }, [])

  const Header = () => <MintSubHeader bright={bright} content="콘서트 상세" />
  const Contents = () =>
    concertData === null ? <MintDetailSkeleton /> : <MintConcertDetailContents concertData={concertData} />
  const Footer = () => (
    <>
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          bottom: 0,
          margin: '20px 0 0',
          backgroundColor: 'transparent',
          boxSizing: 'border-box',
        }}>
        <MintBtn name="예매하기" link={`concert/date/${id}`} passData={concertData} />
      </Box>
    </>
  )

  return (
    <Box className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </Box>
  )
}
