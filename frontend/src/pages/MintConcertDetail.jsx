//modules
import '../styles/MintHome.css'
import '../styles/MintConcertDetail.css'
//components
import MintSubHeader from '../components/header/MintSubHeader'
import MintFooter from '../components/footer/MintFooter'
import MintConcertDetailContents from '../components/concert/MintConcertDetailContents'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtn from '../components/common/MintBtn'

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

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}
