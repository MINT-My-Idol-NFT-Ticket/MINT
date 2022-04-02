import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabContext from '@mui/lab/TabContext'

import { isLight, lightColor, darkColor } from '../../functions/util/Color.js'

export default function MintUserDate({ value, setValue, bright }) {
  const handleChange = (e, newValue) => {
    setValue(newValue)
  }
  const address = sessionStorage.getItem('address')
  return (
    <Box sx={{ width: '100%', height: '160px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '40px 60px 20px',
          fontSize: '26px',
          fontWeight: 'bold',
          boxSizing: 'border-box',
        }}>
        <p>13000 SSF</p>
      </Box>
      <Box sx={{ padding: '0 60px' }}>
        <Box sx={{ position: 'relative' }}>
          <input
            type="text"
            value={`${address.slice(0, 7)}...${address.slice(-4)}`}
            disabled
            style={{
              width: '100%',
              height: '30px',
              borderRadius: '50px',
              padding: '0 30px',
              boxSizing: 'border-box',
              color: '#201f1f',
              border: 'none',
              backgroundColor: 'rgb(195, 189, 189)',
              marginBottom: '20px',
            }}
          />
          <img
            src="currency.png"
            style={{
              position: 'absolute',
              width: '18px',
              top: '5px',
              left: '5px',
            }}
            alt=""
          />
        </Box>
      </Box>
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
    </Box>
  )
}
