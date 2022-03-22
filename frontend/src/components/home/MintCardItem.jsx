//modules
import '../../styles/MintCardItem.css'
//componentx
import MintConcertText from '../common/MintConcertText'
import MintConcertPoster from '../common/MintConcertPoster'
import { height } from '@mui/system'
// 인라인 리소스 확보시 스타일 제거 필요

export default function MintCardItem({ isOpen, concertData, textStyle, height }) {
  return (
    <div className={`MintCardItem ${isOpen ? 'open' : ''}`}>
      <MintConcertPoster imgUrl={concertData.img} height={height} />
      <MintConcertText
        data={{
          singer: concertData.singer,
          title: concertData.title,
          date: concertData.date,
        }}
        textStyle={textStyle}
      />
    </div>
  )
}
