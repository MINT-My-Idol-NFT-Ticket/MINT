import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { balanceOfSSF } from '../../functions/erc/ERCfunctions'
import getUserAddress from '../../functions/util/getUserAddress'
import { getRequest } from '../../api/requests'
import checkNotAddress from '../../functions/util/checkNotAddress'
import { getTicketList } from '../../functions/erc/ERCfunctions'

import MintUserData from './MintUserData'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import MintBuyList from './MintBuyList'
import MintCollections from './MintCollections'

export default function MintMypageContents() {
  const userAddress = getUserAddress()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  const [value, setValue] = useState('1')
  const [balance, setBalance] = useState('undefined')
  const [contractList, setContractList] = useState([])
  const [tokenIds, setTokenIds] = useState([])

  const getBalance = async () => {
    const response = await balanceOfSSF(userAddress)
    setBalance(response)
  }

  const getContractList = async () => {
    const tks = []
    const cts = new Set()
    try {
      const response = await getRequest('api/concert/contracts', { contract: 'contractAddress' })
      const result = response.data.map(address => address.contractAddress[0])

      for (let idx = 0; idx < result.length; idx++) {
        const tokenList = await getTicketList(result[idx], userAddress)
        if (tokenList.length === 0) continue
        for (let i = 0; i < tokenList.length; i++) {
          tks.push({ contractAddress: result[idx], tokenId: tokenList[i].tokenId })
          cts.add(result[idx])
        }
      }
      const arr = []
      for (let c of [...cts]) {
        const response = await getRequest(`api/concert/contracts${c}`)
        arr.push(response.data[0])
      }
      setContractList(arr)
      setTokenIds(tks)
      setLoading(false)
    } catch {
      navigate('/error404')
    }
  }

  useEffect(() => {
    if (checkNotAddress(() => navigate('/address'))) {
      getBalance()
      getContractList()
    }
  }, [])

  return (
    <Box>
      <Box sx={{ width: '100%', position: 'absolute', top: '45px', zIndex: 100 }}>
        <MintUserData value={value} setValue={setValue} balance={balance} userAddress={userAddress} />
      </Box>
      <Box sx={{ paddingTop: '160px' }}>
        <Box sx={{ width: '100%', padding: '0 15px', boxSizing: 'border-box', marginTop: '40px' }}>
          <TabContext value={value}>
            <Box>
              <TabPanel style={{ padding: 0 }} value="1">
                <MintBuyList contractList={contractList} loading={loading} />
              </TabPanel>
              <TabPanel style={{ padding: 0 }} value="2">
                <MintCollections tokenIds={tokenIds} loading={loading} />
              </TabPanel>
            </Box>
          </TabContext>
        </Box>
      </Box>
    </Box>
  )
}
