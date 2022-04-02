import '../../styles/MintHeader.css'

function MintHeader({ bright }) {
  return (
    <div className="MintHeader__logo" style={{}}>
      <img src={bright === 'light' ? 'logo_light.png' : 'logo_dark.png'} alt="" />
    </div>
  )
}

export default MintHeader
