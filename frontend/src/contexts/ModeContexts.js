import { useState, createContext } from 'react'

export const ModeContextStore = createContext()

const ModeContext = props => {
  const [bright, setBright] = useState('light')

  const BrightInfo = [bright, setBright]

  return <ModeContextStore.Provider value={BrightInfo}>{props.children}</ModeContextStore.Provider>
}

export default ModeContext
