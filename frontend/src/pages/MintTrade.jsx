import MintPageTemplate from '../components/common/MintPageTemplate'
import MintFooter from '../components/footer/MintFooter'
import MintSubHeader from '../components/header/MintSubHeader'
import MintTradeContents from '../components/trade/MintTradeContents'

function MintTrade() {
  document.title = 'MINT - 티켓 거래'

  const Header = () => <MintSubHeader content={'Open Ticket'} />
  const Contents = () => <MintTradeContents />
  const Footer = () => <MintFooter />
  return (
    <div>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}
export default MintTrade
