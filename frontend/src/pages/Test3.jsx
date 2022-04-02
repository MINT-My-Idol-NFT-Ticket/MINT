import { confirmMessage, checkMessage, errorMessage, timerMessage } from '../functions/alert/alertFunctions.js'
import useBrightness from '../hooks/useBrightness.js'

export default function test3() {
  const [bright, _] = useBrightness()
  const click = () => {
    // confirmMessage('지갑을 등록하시겠습니까?', '0xaaaa...aaaa', bright)
    timerMessage('예매가 진행 중입니다')
  }
  return (
    <>
      <button onClick={click}>confirm</button>
    </>
  )
}
