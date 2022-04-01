import { Button } from '@mui/material'
import { deployContract } from '../../functions/erc/ERCfunctions.js'

export default function MintDeployContract({ contractAddress, setContractAddress }) {
  const deploy = async () => {
    const tmp = await deployContract()
    console.log(tmp)
    setContractAddress(tmp)
  }
  return (
    <>
      <br />
      <Button variant="contained" onClick={deploy}>
        콘서트 컨트랙트 배포
      </Button>
      <br />
      <br />
      <p>컨트랙트 주소 : {contractAddress}</p>
      <br />
    </>
  )
}
