import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRequest } from '../api/requests'
import { Box } from '@mui/material'

import MintSubHeader from '../components/header/MintSubHeader'
import MintConcertDetailContents from '../components/concert/MintConcertDetailContents'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtn from '../components/common/MintBtn'
import MintDetailSkeleton from '../components/skeleton/MintDetailSkeleton'

export default function MintConcertDetail() {
  document.title = 'MINT - 콘서트 상세 정보'

  const navigate = useNavigate()

  const [concertData, setConcertData] = useState(null)
  const [status, setStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const id = useParams().id

  useEffect(async () => {
    try {
      const response = await getRequest(`api/concert/${id}`)

      setConcertData(response.data)
      setStatus(response.data.status === 1 ? false : true)
      setLoading(false)
    } catch {
      navigate('/error404')
    }
  }, [])

  const Header = () => <MintSubHeader content="콘서트 상세" />
  const Contents = () =>
    concertData === null ? (
      <MintDetailSkeleton />
    ) : (
      <MintConcertDetailContents concertData={concertData} loading={loading} />
    )
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
        <MintBtn name="예매하기" link={`concert/date/${id}`} passData={concertData} available={status} />
      </Box>
    </>
  )

  return (
    <Box>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </Box>
  )
}
