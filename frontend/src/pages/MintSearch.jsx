
import MintFooter from '../components/footer/MintFooter'
import MintPageTemplate from '../components/common/MintPageTemplate'
import MintSubHeader from '../components/header/MintSubHeader'
import MintSearchContents from '../components/search/MintSearchContents'

function MintSearch({ bright }) {
  const Header = () => <MintSubHeader content="검색" bright={bright} />
  const Contents = () => <MintSearchContents bright={bright} />
  const Footer = () => <MintFooter bright={bright} />

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintSearch
