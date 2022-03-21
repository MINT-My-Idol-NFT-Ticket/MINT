import '../styles/MintHome.css'

import MintHeader from '../components/header/MintHeader'
import MintFooter from '../components/footer/MintFooter'
import MintBanner from '../components/home/MintBanner'
import MintCardItem from '../components/home/MintCardItem'

function MintHome() {
  return (
    <div className="MintHome">
      <div className="MintHome__header">
        <MintHeader />
      </div>
      <div className="MintHome__contents">
        <MintBanner />
        <MintCardItem isOpen="true" />
      </div>
      <div className="MintHome__footer">
        <MintFooter />
      </div>
    </div>
  )
}

export default MintHome
