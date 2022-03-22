import '../../styles/MintPageTemplate.css'

export default function MintPageTemplate({ header, contents, footer }) {
  return (
    <div className={`MintPageTemplate`}>
      <div className="MintPageTemplate__header">{header}</div>
      <div className="MintPageTemplate__contents">{contents}</div>
      <div className="MintPageTemplate__footer">{footer}</div>
    </div>
  )
}
