import LogoLight from '../../images/logo_light.png'
import LogoDark from '../../images/logo_dark.png'
import '../../styles/MintHeader.css'
import useBrightness from '../../hooks/useBrightness'

function MintHeader() {
  const [bright, setBright] = useBrightness()
  return (
    <div className="MintHeader__logo" style={{}}>
      <img src={bright === 'light' ? LogoLight : LogoDark} alt="" />
    </div>
  )
}

export default MintHeader
