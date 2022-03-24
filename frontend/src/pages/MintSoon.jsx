//components
import MintFooter from '../components/footer/MintFooter'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintSubHeader from '../components/header/MintSubHeader'
import MintSoonContents from '../components/comming_soon/MintSoonContents'

function MintSearch({ bright }) {
  const Header = () => <MintSubHeader content="오픈 예정" bright={bright} />
  const Contents = () => <MintSoonContents bright={bright} />
  const Footer = () => <MintFooter bright={bright} />

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintSearch
