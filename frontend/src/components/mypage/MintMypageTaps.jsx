import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'

import MintBuyList from './MintBuyList'

export default function MintMypageTabs({ value }) {
  return (
    <>
      <Box sx={{ width: '100%', padding: '0 15px', boxSizing: 'border-box', marginTop: '40px' }}>
        <TabContext value={value}>
          <Box>
            <TabPanel style={{ padding: 0 }} value="1">
              <MintBuyList />
            </TabPanel>
            <TabPanel style={{ padding: 0 }} value="2">
              컬렉션
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  )
}
