import { useLocation } from 'react-router-dom'

import MintPageTemplate from '../components/common/MintPageTemplate'
import MintFooter from '../components/footer/MintFooter'
import MintSubHeader from '../components/header/MintSubHeader'
import MintTradeDetailContents from '../components/trade/MintTradeDetailContents'

function MintTradeDetail() {
  document.title = 'MINT - 거래 상세'

  const location = useLocation()

  const Header = () => <MintSubHeader content="상세페이지" />
  const Contents = () => <MintTradeDetailContents concertData={location.state} />
  const Footer = () => <MintFooter />
  return (
    <div>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintTradeDetail
