import Box from '@mui/material/Box'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import { useEffect, useState } from 'react'

import { getRequest } from '../../api/requests'
import { getTicketList, getTicketAmount } from '../../functions/erc/ERCfunctions'
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
    const tks = []
    const cts = new Set()
    for (let idx = 0; idx < result.length; idx++) {
      const tokenList = await getTicketList(result[idx], userAddress)

      if (tokenList.length === 0) continue
      for (let i = 0; i < tokenList.length; i++) {
        tks.push({ contractAddress: result[idx], tokenId: tokenList[i].tokenId })
        cts.add(result[idx])
      }
    }
    setContractList(result)
    setTokenIds(tks)
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
