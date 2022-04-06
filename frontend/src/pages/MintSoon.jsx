import MintFooter from '../components/footer/MintFooter'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintSubHeader from '../components/header/MintSubHeader'
import MintSoonContents from '../components/comming_soon/MintSoonContents'

function MintSearch({ bright }) {
  document.title = 'MINT - 오픈 예정 콘서트'

  const Header = () => <MintSubHeader content="오픈 예정" />
  const Contents = () => <MintSoonContents />
  const Footer = () => <MintFooter />

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintSearch
