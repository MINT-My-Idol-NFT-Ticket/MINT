import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRequest } from '../api/Request'
import { Skeleton } from '@mui/material'

import '../styles/MintHome.css'
import '../styles/MintConcertDetail.css'

import MintSubHeader from '../components/header/MintSubHeader'
import MintConcertDetailContents from '../components/concert/MintConcertDetailContents'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtn from '../components/common/MintBtn'
import MintDetailSkeleton from '../components/skeleton/MintDetailSkeleton'

export default function MintConcertDetail({ bright }) {
  const [concertData, setConcertData] = useState(null)

  const Header = () => <MintSubHeader bright={bright} content="콘서트 상세" />
  const Contents = () =>
    concertData === null ? <MintDetailSkeleton /> : <MintConcertDetailContents concertData={concertData} />
  const Footer = () => (
    <>
      <div className="MintConcertDetailContents__btn">
        <MintBtn name="예매하기" link="concert/date" />
      </div>
    </>
  )

  const id = useParams().id
  useEffect(async () => {
    const response = await getRequest(`api/concert/${id}`)

    setConcertData(response.data)
  }, [])
  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}
