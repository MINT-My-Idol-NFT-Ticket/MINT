import '../../styles/MintConcertPoster.css'

export default function MintConcertPoster({ imgUrl, width, height }) {
  return (
    <div
      className={`MintConcertPoster`}
      style={{
        width: width,
        height: height,
      }}>
      <div
        className={`img__wrapper`}
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
