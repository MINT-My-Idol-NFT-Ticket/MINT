import '../../styles/MintConcertPoster.css'

export default function MintConcertPoster({ imgUrl }) {
  return (
    <div className="MintConcertPoster">
      <img src={imgUrl} alt="" />
    </div>
  )
}
