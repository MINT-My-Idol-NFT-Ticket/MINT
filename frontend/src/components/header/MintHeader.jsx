//packages
import LogoLight from '../../images/logo_light.png'
import LogoDark from '../../images/logo_dark.png'
//moduels
import '../../styles/MintHeader.css'

function MintHeader({ bright }) {
  return (
    <div className="MintHeader__logo" style={{}}>
      <img src={bright === 'light' ? LogoLight : LogoDark} alt="" />
    </div>
  )
}

export default MintHeader
