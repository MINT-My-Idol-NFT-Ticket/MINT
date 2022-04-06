import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { useEffect, useState } from 'react'

import MintBuyList from './MintBuyList'
import MintCollections from './MintCollections'

export default function MintMypageTabs({ value, contractList, tokenIds }) {
  return (
    <>
      <Box sx={{ width: '100%', padding: '0 15px', boxSizing: 'border-box', marginTop: '40px' }}>
        <TabContext value={value}>
          <Box>
            <TabPanel style={{ padding: 0 }} value="1">
              <MintBuyList contractList={contractList} />
            </TabPanel>
            <TabPanel style={{ padding: 0 }} value="2">
              <MintCollections tokenIds={tokenIds} />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  )
}
