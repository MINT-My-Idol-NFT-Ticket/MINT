import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { mintTicket, balanceOfSSF, approveSSF, getTicketAmount } from '../../functions/erc/ERCfunctions.js'
import { checkMessage, errorMessage, timerMessage } from '../../functions/alert/alertFunctions.js'
import { useLocation, useNavigate } from 'react-router-dom'

import useBrightness from '../../hooks/useBrightness.js'
import { getRequest, putRequest } from '../../api/requests.js'

const getTocken = () =>
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEE2RDQzQWFEMTMzMmZiRDFjNUM2NzMwNEYxZkJhNTdGRjJkRTYzNDIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDg5Nzg3MTE1NDUsIm5hbWUiOiJTU0FZRl9NSU5UIn0.2R4MBp59c8W3ds0aTMSD89XM1Rp2XTHHYk8ratza72M'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 3,
}

export default function MintConcertPaymentModal({ open, handleClose, concertInfo }) {
  const userAddress = sessionStorage.getItem('address')
  const contractAddress = concertInfo.contractAddress
  const navigate = useNavigate()
  const seatId = useLocation().state.seat.id

  const [bright, _] = useBrightness()
  const [wallet, setWellet] = useState(0)
  const [userWalletPK, setUserWalletPK] = useState('')

  const pushHome = () => navigate('/home')
  const pushMypage = () => navigate('/mypage')

  const checkWalletBalance = async () => {
    const response = await balanceOfSSF(userAddress)
    setWellet(response)
  }
  const makeTokenURI = async () => {
    const client = new Web3Storage({ token: getTocken() })
    const max = concertInfo.cids.length
    const random = Math.floor(Math.random() * max)
    const images = JSON.parse(concertInfo.cids[random].cid)
    const data = {
      title: concertInfo.title,
      section: concertInfo.area,
      date: concertInfo.date,
      time: concertInfo.time,
      seat: concertInfo.seat,
      userAddress: userAddress,
      img: {
        gif: `https://ipfs.io/ipfs/${images.gif}`,
        mp4: `https://ipfs.io/ipfs/${images.mp4}`,
      },
    }
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const files = [new File([blob], 'tokenURI.json')]
    const cid = await client.put(files)

    return `https://ipfs.io/ipfs/${cid}/tokenURI.json`
  }

  const paying = async () => {
    const amount = await getTicketAmount(contractAddress, userAddress)
    if (amount > 0) {
      errorMessage(
        '해당 콘서트를 이미 예매했습니다',
        null,
        () => {
          handleClose()
          pushMypage()
        },
        bright,
      )
      return
    }
    const seatState = await getRequest(`api/ticket/seat/${seatId}`)
    if (seatState.data.status !== 0) {
      errorMessage('티켓을 발급할 수 없습니다', '이미 선택된 좌석입니다', () => navigate(-1), bright)
      return
    }
    await approveSSF(userWalletPK, contractAddress, concertInfo.price)
    const tokenURI = await makeTokenURI()

    //티켓 발급
    const result = await mintTicket(contractAddress, userAddress, userWalletPK, tokenURI)
    if (result) {
      checkMessage('티켓이 발급되었습니다', pushHome, bright)
      putRequest('api/ticket', { seatId: seatId })
      return
    } else {
      errorMessage('티켓을 발급할 수 없습니다', null, pushMypage, bright)
      return
    }
  }

  const minting = () => {
    timerMessage('잠깐 기다려 주세요', '티켓을 발급하고 있습니다', paying, bright)
  }

  useEffect(() => {
    checkWalletBalance()
  })
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <Box sx={{ ...style, minWidth: '340px', maxWidth: '414px', zIndex: '-1' }}>
        <Typography variant="h6" sx={{ marginBottom: '20px' }}>
          결제를 진행합니다.
        </Typography>
        <Grid container sx={{ margin: '10px 0' }}>
          <Grid item xs={5.5} sx={itemStyle}>
            <Typography sx={itemTypo}>현재 잔액</Typography>
            <Typography>{wallet} SSF</Typography>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: '12px', lineHeight: '44px' }}>➡</Typography>
          </Grid>
          <Grid item xs={5.5} sx={itemStyle}>
            <Typography sx={itemTypo}>결제 후 예상 잔액</Typography>
            <Typography>{wallet - concertInfo.price} SSF</Typography>
          </Grid>
        </Grid>
        <TextField
          size="small"
          label="개인키를 입력해주세요."
          placeholder="0xabcd1234abcd1234abcd1234abcd1234abcd1234"
          value={userWalletPK}
          onChange={e => setUserWalletPK(e.target.value)}
          sx={{ width: '100%', margin: '16px 0' }}></TextField>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: '600' }}>Total</Typography>
          <Typography>{concertInfo.price} SSF</Typography>
        </Box>
        <Box sx={{ marginTop: '16px', float: 'right' }}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }} onClick={minting}>
            결제
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

const itemStyle = { display: 'flex', flexDirection: 'column', textAlign: 'center' }
const itemTypo = { fontSize: '12px', color: '#C4C4C4' }
