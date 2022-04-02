import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'

import '../../styles/MintUserData.css'
import { isLight, lightColor, darkColor } from '../../functions/util/Color.js'

export default function MintUserDate({ value, setValue, bright }) {
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const address = sessionStorage.getItem('address')
  return (
    <div className="MintUserDate">
      <div className="MintUserData__balance">
        <p>13000 SSF</p>
      </div>
      <div className="MintUserData__walletAdress">
        <div className="MintUserData__wrapper">
          <input type="text" value={`${address.slice(0, 7)}...${address.slice(-4)}`} disabled />
          <img src="currency.png" alt="" />
        </div>
      </div>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            backgroundColor: `${isLight(bright) ? lightColor : darkColor}`,
          }}>
          <TabList onChange={handleChange}>
            <Tab label="구매 내역" value="1" />
            <Tab label="컬렉션" value="2" />
          </TabList>
        </Box>
      </TabContext>
    </div>
  )
}
