import { Modal, Box, Typography, TextField, Button, CardMedia, Card, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { balanceOfSSF } from '../../functions/erc/ERCfunctions'
import MintTradeDetailModalItem from './MintTradeDetailModalItem'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
  pt: 2,
  px: 2,
  pb: 3,
}

export default function MintTradeDetailModal({ open, handleClose, ticketInfo }) {
  const location = useLocation()
  const userAddress = sessionStorage.getItem('address')
  const [wallet, setWallet] = useState(0)
  const checkWalletBalance = async () => {
    const response = await balanceOfSSF(userAddress)
    setWallet(response)
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
            결제를 진행합니다...
          </Typography>
        </Box>
        <MintTradeDetailModalItem state={location.state} />
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
            <Typography>{wallet - ticketInfo.price} SSF</Typography>
          </Grid>
        </Grid>
        <TextField
          size="small"
          label="개인키를 입력해주세요."
          placeholder="0xabcd1234abcd1234abcd1234abcd1234abcd1234"
          sx={{ width: '100%', margin: '16px 0' }}></TextField>
        <Box sx={{ float: 'right' }}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }}>
            결제
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

const itemStyle = { display: 'flex', flexDirection: 'column', textAlign: 'center' }
const itemTypo = { fontSize: '12px', color: '#C4C4C4' }
