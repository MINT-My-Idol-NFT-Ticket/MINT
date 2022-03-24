//components
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintFooter from '../components/footer/MintFooter'
import MintHeader from '../components/header/MintHeader'
import MintTradeContents from '../components/trade/MintTradeContents'

function MintTrade({ bright }) {
  const Header = () => <MintHeader bright={bright} />
  const Contents = () => <MintTradeContents />
  const Footer = () => <MintFooter bright={bright} />
  return (
    <div>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}
export default MintTrade
