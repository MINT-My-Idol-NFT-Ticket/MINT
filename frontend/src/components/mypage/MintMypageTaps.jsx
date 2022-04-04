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
  const userAddress = getUserAddress()
  const [contractList, setContractList] = useState()
  const [tokenIds, setTokenIds] = useState([])

  const getContractList = async () => {
    const response = await getRequest('api/concert/contracts', { contract: 'contractAddress' })
    const result = response.data.map(address => address.contractAddress[0])
    const tmpTokenIds = []
    for (let idx = 0; idx < result.length; idx++) {
      const tokenList = await getTicketList(result[idx], userAddress)
      if (tokenList.length === 0) continue
      for (let i = 0; i < tokenList.length; i++)
        tmpTokenIds.push({ contractAddress: result[idx], tokenIds: tokenList[i].tokenId })
    }
    setContractList(result)
    setTokenIds(tmpTokenIds)
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
              <MintCollections tokenIds={tokenIds} />
            </TabPanel>
          </Box>
        </TabContext>
      </Box>
    </>
  )
}
