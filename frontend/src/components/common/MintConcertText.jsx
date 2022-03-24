import '../../styles/MintConcertText.css'

export default function MintConcertText({ data, textStyle }) {
  return (
    <div className="MintConcertText" style={textStyle.width}>
      <p className={`MintConcertText__title`}>
        <span className="singer" style={textStyle.singer}>
          [{data.singer}]
        </span>
        <span className="title" style={textStyle.title}>
          {data.title}
        </span>
      </p>
      <p className={`MintConcertText__date`} style={textStyle.date}>
        {data.date}
      </p>
    </div>
  )
}
