//packages
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'
//modules
import '../../styles/MintUserData.css'
import currency from '../../images/currency.png'

export default function MintUserDate({ value, setValue }) {
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  return (
    <div className="MintUserDate">
      <div className="MintUserData__balance">
        <p>13000 SSF</p>
      </div>
      <div className="MintUserData__walletAdress">
        <div className="MintUserData__wrapper">
          <input type="text" value="asfsdfasdf" disabled />
          <img src={currency} alt="" />
        </div>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', backgroundColor: '#EEEEEE' }}>
          <TabList onChange={handleChange}>
            <Tab label="구매 내역" value="1" />
            <Tab label="컬렉션" value="2" />
          </TabList>
        </Box>
      </TabContext>
    </div>
  )
}
