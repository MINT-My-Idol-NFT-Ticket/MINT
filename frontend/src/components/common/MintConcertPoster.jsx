import '../../styles/MintConcertPoster.css'

export default function MintConcertPoster({ imgUrl }) {
  return (
    <div className="MintConcertPoster">
      <div
        className="img__wrapper"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'brown',
        }}>
        {imgUrl}
      </div>
    </div>
  )
}
