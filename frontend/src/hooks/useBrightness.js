import { useContext } from 'react'
import { ModeContextStore } from '../contexts/ModeContexts'

const useBrightness = () => {
  return useContext(ModeContextStore)
}

export default useBrightness
