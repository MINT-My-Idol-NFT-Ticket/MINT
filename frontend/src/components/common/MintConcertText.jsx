export default function MintConcertText({ data, textStyle }) {
  return (
    <div style={textStyle.width}>
      <p
        style={{
          margin: '5px 0',
          fontWeight: 'bold',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
        <span style={textStyle.singer}>[{data.singer}]</span>
        <span style={textStyle.title}>{data.title}</span>
      </p>
      <p style={textStyle.date}>{data.date}</p>
    </div>
  )
}
