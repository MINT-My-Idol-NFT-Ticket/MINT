//modules
import '../styles/MintHome.css'
import '../styles/MintConcertDetail.css'
//components
import MintHeader from '../components/header/MintHeader'
import MintFooter from '../components/footer/MintFooter'
import MintConcertDetailContents from '../components/concert/MintConcertDetailContents'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintBtn from '../components/common/MintBtn'

export default function MintConcertDetail({ bright }) {
  const Header = () => <MintHeader bright={bright} />
  const Contents = () => <MintConcertDetailContents />
  const Footer = () => (
    <>
      <div className="MintConcertDetailContents__btn">
        <MintBtn name="예매하기" />
      </div>
      <MintFooter bright={bright} />
    </>
  )

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}
