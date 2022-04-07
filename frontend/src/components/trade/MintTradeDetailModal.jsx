import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { approveSSF, balanceOfSSF, purchaseTicket } from '../../functions/erc/ERCfunctions'
import { checkMessage, errorMessage, timerMessage } from '../../functions/alert/alertFunctions'
import useBrightness from '../../hooks/useBrightness'

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

export default function MintTradeDetailModal({ open, handleClose, tokenURI }) {
  const userAddress = sessionStorage.getItem('address')
  // const contractAddress = tokenURI.contractAddress
  const saleContractAddress = tokenURI.saleContractAddress
  const navigate = useNavigate()

  const [userPK, setUserPK] = useState('')
  const [wallet, setWallet] = useState(0)
  const [bright, _] = useBrightness()

  const checkWalletBalance = async () => {
    const response = await balanceOfSSF(userAddress)
    setWallet(response)
  }
  const tradeTicket = async () => {
    try {
      await approveSSF(userPK, saleContractAddress, tokenURI.price)
      await purchaseTicket(userPK, saleContractAddress, tokenURI.tokenId)
      checkMessage(
        '티켓을 구매했습니다',
        () => {
          navigate('/mypage')
        },
        bright,
      )
    } catch (error) {
      errorMessage('거래에 실패했습니다', '잔액이 부족하거나 이미 소유 중입니다', null, bright)
    } finally {
      setUserPK('')
    }
  }

  const deal = () => {
    timerMessage('잠시 기다려 주세요', '거래를 처리 중입니다', tradeTicket, bright)
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
      <Box sx={{ ...style, minWidth: '340px', maxWidth: '414px' }}>
        <Box>
          <Typography variant="h6" s={{ margin: 'auto' }}>
            구매를 진행합니다
          </Typography>
        </Box>
        <Grid container sx={{ margin: '40px 0 30px' }}>
          <Grid item xs={5.5} sx={itemStyle}>
            <Typography sx={itemTypo}>현재 잔액</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>{wallet} SSF</Typography>
          </Grid>
          <Grid item xs={1} sx={{ textAlign: 'center' }}>
            <Typography sx={{ fontSize: '12px', lineHeight: '44px' }}>➡</Typography>
          </Grid>
          <Grid item xs={5.5} sx={itemStyle}>
            <Typography sx={itemTypo}>결제 후 예상 잔액</Typography>
            <Typography sx={{ fontSize: 20, fontWeight: 'bold' }}>{wallet - tokenURI.price} SSF</Typography>
          </Grid>
        </Grid>
        <TextField
          size="small"
          label="개인키를 입력해주세요."
          placeholder="0xabcd1234abcd1234abcd1234abcd1234abcd1234"
          sx={{ width: '100%', margin: '16px 0' }}
          value={userPK}
          onChange={e => setUserPK(e.target.value)}></TextField>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: '600' }}>Total</Typography>
          <Typography>{tokenURI.price} SSF</Typography>
        </Box>
        <Box sx={{ marginTop: '16px', float: 'right' }}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }} onClick={deal}>
            결제
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

const itemStyle = { display: 'flex', flexDirection: 'column', textAlign: 'center' }
const itemTypo = { fontSize: '12px', color: '#C4C4C4' }
