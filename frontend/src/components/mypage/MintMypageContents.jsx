//packages
import { useEffect, useState } from 'react'
//modules
import '../../styles/MintMypageContents.css'
//components
import MintUserDate from './MintUserData'
import MintMypageTaps from './MintMypageTaps'

export default function MintMypageContents({ bright }) {
  const [value, setValue] = useState('1')

  return (
    <div className="MintMypageContents">
      <div className={`MintMypageContents__userData ${bright}`}>
        <MintUserDate value={value} setValue={setValue} />
      </div>
      <div className="MintMypageContents__taps">
        <MintMypageTaps value={value} />
      </div>
    </div>
  )
}
