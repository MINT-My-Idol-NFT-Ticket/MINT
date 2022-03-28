//modules
import '../styles/MintHome.css'
//components
import MintHeader from '../components/header/MintHeader'
import MintFooter from '../components/footer/MintFooter'
import MintHomeContents from '../components/home/MintHomeContents'
import MintPageTemplate from '../components/common/MintPageTemplate'

export default function MintHome({ bright }) {
  const Header = () => <MintHeader bright={bright} />
  const Contents = () => <MintHomeContents />
  const Footer = () => <MintFooter bright={bright} />

  return (
    <div className={`${bright}`}>
      <MintPageTemplate header={<Header />} contents={<Contents />} footer={<Footer />} />
    </div>
  )
}
