import { Button } from '@mui/material'
import { useState } from 'react'
import { Grid } from '@mui/material'
import {
  deployContract,
  getContractName,
  mintTicket,
  getBalance,
  getTicketList,
  transferTicket,
} from '../functions/TicketTransactions.js'
import {
  getWalletBalance,
  transferSSAFY,
  approve,
  allowance,
  transferFromSSAFY,
} from '../functions/WalletTransactions.js'

const 주현주소 = process.env.REACT_APP_ADMIN_WALLET_ADDRESS
const 주현개인키 = process.env.REACT_APP_ADMIN_PRIVATE_KEY
const 창현주소 = '0xb2FF8d3Cb3759CD4F3841816Fc0e646C5A9AC40b'
const 창현개인키 = '0x2268d80094b1dcbfcb3785c0940d06ed14d941efe4a80145aced37037833cb7a'
const 계약주소 = '0xdD4491563f17B2f3D14a92d9dA737fEb6c97a160'

export default function Test2() {
  const [주현잔액, set주현잔액] = useState()
  const [창현잔액, set창현잔액] = useState()
  const check잔액 = async (address, setBalance) => {
    const tmp = await getWalletBalance(address)
    setBalance(tmp)
  }
  //민팅
  const mint = async (contractAddress, senderAddress, senderPK) => {
    await mintTicket('MintTicket', contractAddress, senderAddress, senderPK)
    checkTokenNum(계약주소, 주현주소, set주현토큰개수)
    checkTokenNum(계약주소, 창현주소, set창현토큰개수)
    checkTokenList(계약주소, 창현주소, set창현토큰목록)
    checkTokenList(계약주소, 창현주소, set창현토큰목록)
  }
  //토큰 개수 확인
  const [주현토큰개수, set주현토큰개수] = useState(0)
  const [창현토큰개수, set창현토큰개수] = useState(0)
  const checkTokenNum = async (contractAddress, senderAddress, setTokenNum) => {
    const tmp = await getBalance('MintTicket', contractAddress, senderAddress)
    setTokenNum(tmp)
  }

  //토큰 목록 확인
  const [주현토큰목록, set주현토큰목록] = useState('')
  const [창현토큰목록, set창현토큰목록] = useState('')
  const checkTokenList = async (contractAddress, senderAddress, setTokenList) => {
    const tmp = await getTicketList('MintTicket', contractAddress, senderAddress)
    setTokenList(tmp)
  }

  //권한 부여
  const auth = async (senderAddress, serderPK, spender, amount) => {
    await approve(senderAddress, serderPK, spender, amount)
  }

  //권한 확인
  const allow = async (senderAddress, spender) => {
    await allowance(senderAddress, spender)
  }

  //돈 송금
  const transferSSF = async (senderAddress, senderPK, recipientAddress, amount) => {
    await transferSSAFY(senderAddress, senderPK, recipientAddress, amount)
    check잔액(주현주소, set주현잔액)
    check잔액(창현주소, set창현잔액)
  }

  const transferFromSSF = async (operator, operatorPK, sender, recipient, amount) => {
    await transferFromSSAFY(operator, operatorPK, sender, recipient, amount)
    check잔액(주현주소, set주현잔액)
    check잔액(창현주소, set창현잔액)
  }

  return (
    <>
      <Grid container spacing={2}>
        {/* 주현 */}
        <Grid item xs={4}>
          <h1>주현</h1>
          <br />
          <div>
            <Button variant="contained" onClick={() => check잔액(주현주소, set주현잔액)}>
              잔액 확인
            </Button>
            <p>잔액 : {주현잔액}</p>
          </div>
          <div>
            <Button variant="contained" onClick={() => mint(계약주소, 주현주소, 주현개인키)}>
              주현 민트
            </Button>
            <p>{주현토큰개수} 개</p>
            <p>토큰 목록 : {주현토큰목록}</p>
            <br />
          </div>
          <div></div>
        </Grid>
        {/* 창현 */}
        <Grid item xs={4}>
          <h1>창현</h1>
          <br />
          <div>
            <Button variant="contained" onClick={() => check잔액(창현주소, set창현잔액)}>
              잔액 확인
            </Button>
            <p>잔액 : {창현잔액}</p>
            <Button variant="contained" onClick={() => mint(계약주소, 주현주소, 주현개인키)}>
              창현 민트
            </Button>
            <p>{창현토큰개수} 개</p>
            <p>토큰 목록 : {창현토큰목록}</p>
            <br />
          </div>
        </Grid>
        <Grid item xs={4}>
          <h1>기타</h1>
          <br />
          <div>
            <Button variant="contained" onClick={() => auth(창현주소, 창현개인키, 주현주소, 1)}>
              주현에게 창현지갑 권한 부여
            </Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => allow(창현주소, 주현주소)}>
              주현의 창현지갑 권한 확인
            </Button>
          </div>
          <div>
            <Button variant="contained" onClick={() => transferFromSSF(주현주소, 주현개인키, 창현주소, 주현주소, 1)}>
              주현이 창현지갑에서 1원 빼오기
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  )
}
