import '../styles/MintFooter.css'

import MintHeader from '../components/header/MintHeader'
import MintFooter from '../components/footer/MintFooter'

function MintHome() {
  return (
    <>
      <div className="MintHome__header">
        <MintHeader />
      </div>
      <div className="MintHome__footer">
        <MintFooter />
      </div>
    </>
  )
}

export default MintHome
