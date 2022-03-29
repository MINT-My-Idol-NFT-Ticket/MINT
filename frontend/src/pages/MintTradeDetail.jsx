import MintPageTemplate from '../components/common/MintPageTemplate'
import MintFooter from '../components/footer/MintFooter'
import MintSubHeader from '../components/header/MintSubHeader'
import MintTradeDetailContents from '../components/trade/MintTradeDetailContents'

function MintTradeDetail({ bright }) {
  const Header = () => <MintSubHeader content="상세페이지" bright={bright} />
  const Contents = () => <MintTradeDetailContents bright={bright} />
  const Footer = () => <MintFooter bright={bright} />
  return (
    <div>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintTradeDetail
