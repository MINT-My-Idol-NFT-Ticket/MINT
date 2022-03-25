import { Button } from '@mui/material'
import { useState } from 'react'
import { deployContract, getContractName, mintTicket, getBalance } from '../functions/TicketTransactions.js'
import { getWalletBalance, transferSSAFY } from '../functions/WalletTransactions.js'

const senderAddress = process.env.REACT_APP_ADMIN_WALLET_ADDRESS
const senderPK = process.env.REACT_APP_ADMIN_PRIVATE_KEY

export default function Test() {
  const [contractAddress, setContractAddress] = useState('아직 안 누름')
  const deployButtonClick = async () => {
    const tmp = await deployContract().then(res => res.contractAddress)
    setContractAddress(tmp)
  }

  const [contractName, setContractName] = useState('아직 안누름')
  const nameButtonClick = async () => {
    const tmp = await getContractName('MintTicket', contractAddress)
    setContractName(tmp)
  }

  const [mintData, setmintData] = useState('아직 안누름')
  const mintButtonClick = async () => {
    const tmp = await mintTicket('MintTicket', contractAddress, senderAddress, senderPK)
    setmintData(tmp)
  }

  const [balance, setBalance] = useState('아직 안누름')
  const balanceButtonClick = async () => {
    const tmp = await getBalance('MintTicket', contractAddress, senderAddress)
    setBalance(tmp)
  }

  const setderAddressCH = '0xb2FF8d3Cb3759CD4F3841816Fc0e646C5A9AC40b'
  const [CHwallet, CHsetWallet] = useState(0)
  const CHwalletButtonClick = async () => {
    const tmp = await getWalletBalance(setderAddressCH)
    CHsetWallet(tmp)
  }

  const [wallet, setWallet] = useState(0)
  const walletButtonClick = async () => {
    const tmp = await getWalletBalance(senderAddress)
    setWallet(tmp)
  }

  const transferButtonClick = async () => {
    const tmp = await transferSSAFY(senderAddress, senderPK, setderAddressCH, 1)
    CHwalletButtonClick()
    walletButtonClick()
    // setWallet(tmp)
  }

  return (
    <>
      <Button variant="contained" onClick={deployButtonClick}>
        컨트랙트 배포
      </Button>
      <span>컨트랙트 주소 : {contractAddress}</span>
      <br />
      <Button variant="contained" onClick={nameButtonClick}>
        컨트랙트 이름 CALL
      </Button>
      <span>컨트랙트 이름 : {contractName}</span>
      <br />
      <Button variant="contained" onClick={mintButtonClick}>
        민팅 트랜젝션
      </Button>
      <span>민팅 내용 : {mintData}</span>
      <br />
      <Button variant="contained" onClick={balanceButtonClick}>
        토큰 잔액 확인
      </Button>
      <span>토큰(NFT티켓) 개수 : {balance}</span>
      <br />
      <Button variant="contained" onClick={CHwalletButtonClick}>
        창현님 지갑 잔액 확인
      </Button>
      <span>창현님 지갑 : {CHwallet} SSAFY</span>
      <br />
      <Button variant="contained" onClick={walletButtonClick}>
        사장 지갑 잔액 확인
      </Button>
      <span>사장 지갑 : {wallet} SSAFY</span>
      <br />
      <Button variant="contained" onClick={transferButtonClick}>
        돈 보내기
      </Button>
    </>
  )
}
