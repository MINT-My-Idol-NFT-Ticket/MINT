import { Button } from '@mui/material'
import { useState } from 'react'
import {
  deployContract,
  getContractName,
  mintTicket,
  getBalance,
  getTicketList,
  transferTicket,
} from '../functions/TicketTransactions.js'
import { getWalletBalance, transferSSAFY } from '../functions/WalletTransactions.js'

const senderAddress = process.env.REACT_APP_ADMIN_WALLET_ADDRESS
const senderPK = process.env.REACT_APP_ADMIN_PRIVATE_KEY

export default function Test() {
  const [contractAddress, setContractAddress] = useState('아직 안 누름')
  const deployButtonClick = async () => {
    const tmp = await deployContract().then(res => res.contractAddress)
    setContractAddress(tmp)
  }

  // 컨트랙트 배포
  const [contractName, setContractName] = useState('아직 안누름')
  const nameButtonClick = async () => {
    const tmp = await getContractName('MintTicket', contractAddress)
    setContractName(tmp)
  }

  //민팅
  const [mintData, setmintData] = useState('아직 안누름')
  const mintButtonClick = async () => {
    const tmp = await mintTicket('MintTicket', contractAddress, senderAddress, senderPK)
    setmintData(tmp)
  }

  //토큰 개수 확인
  const [balance, setBalance] = useState('아직 안누름')
  const balanceButtonClick = async () => {
    const tmp = await getBalance('MintTicket', contractAddress, senderAddress)
    setBalance(tmp)
  }

  //토큰 목록 확인
  const [tokenList, setTokenList] = useState([])
  const tokenListButtonClick = async () => {
    const tmp = await getTicketList('MintTicket', contractAddress, senderAddress)
    setTokenList(tmp)
  }

  //토큰 전송
  const transferTicketButtonClick = async () => {
    await transferTicket('MintTicket', contractAddress, senderAddress, senderPK, setderAddressCH, ipt)
    tokenListButtonClick()
    balanceButtonClick()
  }

  //토큰 전송2
  const transferTicketButtonClick2 = async () => {
    await transferTicket(
      'MintTicket',
      contractAddress,
      setderAddressCH,
      '0x2268d80094b1dcbfcb3785c0940d06ed14d941efe4a80145aced37037833cb7a',
      senderAddress,
      ipt,
    )
    tokenListButtonClick()
    balanceButtonClick()
  }

  //지갑 잔액 확인
  const setderAddressCH = '0xb2FF8d3Cb3759CD4F3841816Fc0e646C5A9AC40b'
  const [CHwallet, CHsetWallet] = useState(0)
  const CHwalletButtonClick = async () => {
    const tmp = await getWalletBalance(setderAddressCH)
    CHsetWallet(tmp)
  }

  //지갑 잔액 확인 2
  const [wallet, setWallet] = useState(0)
  const walletButtonClick = async () => {
    const tmp = await getWalletBalance(senderAddress)
    setWallet(tmp)
  }

  //돈 송금
  const transferButtonClick = async () => {
    await transferSSAFY(senderAddress, senderPK, setderAddressCH, 1)
    CHwalletButtonClick()
    walletButtonClick()
  }

  const [ipt, setIpt] = useState('')
  const change = async e => {
    await setIpt(e.target.value)
    console.log(ipt)
  }

  return (
    <>
      <Button variant="contained" onClick={deployButtonClick}>
        컨트랙트 배포
      </Button>
      <span>컨트랙트 주소 : {contractAddress}</span>
      <br />
      <br />
      <Button variant="contained" onClick={nameButtonClick}>
        컨트랙트 이름 CALL
      </Button>
      <span>컨트랙트 이름 : {contractName}</span>
      <br />
      <br />
      <Button variant="contained" onClick={mintButtonClick}>
        민팅 트랜젝션
      </Button>
      <span>민팅 내용 : {mintData}</span>
      <br />
      <br />
      <Button variant="contained" onClick={balanceButtonClick}>
        토큰 잔액 확인
      </Button>
      <span>토큰(NFT티켓) 개수 : {balance}</span>
      <br />
      <br />
      <Button variant="contained" onClick={tokenListButtonClick}>
        토큰 목록 확인
      </Button>
      <span>토큰 목록 : {tokenList}</span>
      <br />
      <br />
      <input type="text" value={ipt} onChange={change} />
      <Button variant="contained" onClick={transferTicketButtonClick}>
        티켓 전송
      </Button>
      <br />
      <br />
      <input type="text" value={ipt} onChange={change} />
      <Button variant="contained" onClick={transferTicketButtonClick2}>
        창현님 티켓 전송
      </Button>
      <br />
      <br />
      <Button variant="contained" onClick={CHwalletButtonClick}>
        창현님 지갑 잔액 확인
      </Button>
      <span>창현님 지갑 : {CHwallet} SSAFY</span>
      <br />
      <br />
      <Button variant="contained" onClick={walletButtonClick}>
        사장 지갑 잔액 확인
      </Button>
      <span>사장 지갑 : {wallet} SSAFY</span>
      <br />
      <br />
      <Button variant="contained" onClick={transferButtonClick}>
        돈 보내기
      </Button>
    </>
  )
}
