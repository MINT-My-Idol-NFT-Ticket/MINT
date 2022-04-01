import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { deployTicketContract, deploySaleContract, setSaleTicket } from '../../functions/erc/ERCfunctions.js'

export default function MintDeployContract({ contractAddresses, setContractAddresses }) {
  const [price, setPrice] = useState(1)
  const deploy = async () => {
    const ticketTmp = await deployTicketContract(price)
    const saleTmp = await deploySaleContract(ticketTmp)
    await setSaleTicket(ticketTmp, saleTmp)
    setContractAddresses([ticketTmp, saleTmp])
  }
  return (
    <>
      <br />
      <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
      <Button variant="contained" onClick={deploy}>
        콘서트 컨트랙트 배포
      </Button>
      <br />
      <br />
      <p>컨트랙트 주소 : {contractAddresses[0]}</p>
      <p>컨트랙트 주소 : {contractAddresses[1]}</p>
      <br />
    </>
  )
}
