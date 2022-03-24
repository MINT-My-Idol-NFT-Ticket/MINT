//components
import MintSubHeader from '../components/header/MintSubHeader'
import MintMypageContents from '../components/mypage/MintMypageContents'
import MintFooter from '../components/footer/MintFooter'
import MintPageTemplate from '../components/common/MintPageTemplate'

function MintHome({ bright }) {
  const Header = () => <MintSubHeader content="내 정보" bright={bright} />
  const Contents = () => <MintMypageContents bright={bright} />
  const Footer = () => <MintFooter bright={bright} />

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintHome
