import '../styles/MintHome.css'
import '../styles/MintConcertDetail.css'

import MintSubHeader from '../components/header/MintSubHeader'
import MintConcertDetailContents from '../components/concert/MintConcertDetailContents'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtn from '../components/common/MintBtn'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getRequest } from '../api/Request'

export default function MintConcertDetail({ bright }) {
  const Header = () => <MintSubHeader bright={bright} content="콘서트 상세" />
  const Contents = () => <MintConcertDetailContents />
  const Footer = () => (
    <>
      <div className="MintConcertDetailContents__btn">
        <MintBtn name="예매하기" link="concert/date" />
      </div>
    </>
  )

  const [concertData, setConcertData] = useState({})
  const id = useParams().id
  useEffect(async () => {
    setConcertData(await getRequest(`api/concert/${id}`).data)
  }, [])
  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents concertData={concertData} />} footer={<Footer />} />
    </div>
  )
}
