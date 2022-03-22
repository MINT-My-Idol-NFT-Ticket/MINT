import { useContext } from 'react'
import { ModeContextStore } from '../contexts/ModeContexts'

// 이주현
// 현재 화면 모드 확인하는 커스텀 훅
// 자세한 내용은 contexts/ModeContexts.js 확인 요망
const useBrightness = () => {
  return useContext(ModeContextStore)
}

export default useBrightness
