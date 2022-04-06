import MintSubHeader from '../components/header/MintSubHeader'
import MintMypageContents from '../components/mypage/MintMypageContents'
import MintFooter from '../components/footer/MintFooter'
import MintPageTemplate from '../components/common/MintPageTemplate'

function MintHome({ bright }) {
  const Header = () => <MintSubHeader content="내 정보" />
  const Contents = () => <MintMypageContents />
  const Footer = () => <MintFooter />

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}

export default MintHome
