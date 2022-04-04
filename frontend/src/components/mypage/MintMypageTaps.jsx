import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { useEffect, useRef, useState } from 'react'

import { getRequest } from '../../api/requests'
import { getTicketList } from '../../functions/erc/ERCfunctions'
import getUserAddress from '../../functions/util/getUserAddress'

import MintBuyList from './MintBuyList'
import MintCollections from './MintCollections'

export default function MintMypageTabs({ value }) {
  const userAddress = getUserAddress
  const [contractList, setContractList] = useState()

  const getContractList = async () => {
    // const response = await getRequest('api/concert/contracts', { contract: 'contractAddress' })
    // const result = response.data.map(address => address.contractAddress[0])
    // console.log(result)
    // for (let idx = 0; idx < result.length - 1; idx++) {
    //   const amount = await getTicketList(result[idx], getUserAddress)
    //   console.log(amount)
    // }
    // setContractList(result)
  }

  useEffect(() => {
    getContractList()
  }, [])
  return (
    <>
      <Box sx={{ width: '100%', padding: '0 15px', boxSizing: 'border-box', marginTop: '40px' }}>
        <TabContext value={value}>
          <Box>
            <TabPanel style={{ padding: 0 }} value="1">
              <MintBuyList />
            </TabPanel>
            <TabPanel style={{ padding: 0 }} value="2">
              <MintCollections />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  )
}
