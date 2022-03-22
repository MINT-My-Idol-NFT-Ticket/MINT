export default function MintConcertText({ data, textStyle }) {
  return (
    <>
      <p className={`MintCardItem__title`}>
        <span className="singer" style={textStyle.singer}>
          [{data.singer}]
        </span>
        <span className="title" style={textStyle.title}>
          {data.title}
        </span>
      </p>
      <p className={`MintCardItem__date`} style={textStyle.date}>
        {data.date}
      </p>
    </>
  )
}
