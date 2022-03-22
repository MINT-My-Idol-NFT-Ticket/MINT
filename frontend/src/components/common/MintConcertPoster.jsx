export default function MintConcertPoster({ imgUrl, height }) {
  console.log(height)
  return (
    <div
      className={`MintCardItem__img`}
      style={{
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
