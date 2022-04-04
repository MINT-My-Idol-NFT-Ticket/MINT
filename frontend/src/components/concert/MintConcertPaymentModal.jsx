import { Modal, Box, Typography, TextField, Button, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Web3Storage } from 'web3.storage'
import { mintTicket, balanceOfSSF, approveSSF } from '../../functions/erc/ERCfunctions.js'
import { checkMessage, errorMessage } from '../../functions/alert/alertFunctions.js'

const getTocken = () => process.env.REACT_APP_WEB3_STORAGE_API

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
  console.log(concertInfo)
  const userAddress = sessionStorage.getItem('address')
  const contractAddress = concertInfo.contractAddress
  const [wallet, setWellet] = useState(0)
  const [userWalletPK, setUserWalletPK] = useState('')
  const [tokenURI, setTokenURI] = useState(false)

  const checkWalletBalance = async () => {
    const response = await balanceOfSSF(userAddress)
    setWellet(response)
  }
  const makeTokenURI = async () => {
    const client = new Web3Storage({ token: getTocken() })
    const max = concertInfo.cids.length
    const random = Math.floor(Math.random() * max)

    const data = {
      title: concertInfo.title,
      section: concertInfo.area,
      date: concertInfo.date,
      seat: concertInfo.seat,
      userAddress: userAddress,
      img: `https://ipfs.io/ipfs/${concertInfo.cids[random].cid}`,
    }
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const files = [new File([blob], 'tokenURI.json')]
    const cid = await client.put(files)
    console.log(`https://ipfs.io/ipfs/${cid}/tokenURI.json`)

    return `https://ipfs.io/ipfs/${cid}/tokenURI.json`
  }

  const payForTicket = async () => {
    if (tokenURI === false) {
      const URI = await makeTokenURI()
      setTokenURI(URI)
    }
    await approveSSF(userWalletPK, contractAddress, concertInfo.price)
    //티켓 발급
    const result = await mintTicket(contractAddress, userAddress, userWalletPK, tokenURI)

    if (result) {
      checkMessage('티켓이 발급되었습니다', null, 'light')
    } else {
      errorMessage('티켓을 발급할 수 없습니다', 'light')
    }
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
          sx={{ width: '100%', margin: '16px 0' }}></TextField>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontWeight: '600' }}>Total</Typography>
          <Typography>{concertInfo.price} SSF</Typography>
        </Box>
        <Box sx={{ marginTop: '16px', float: 'right' }}>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="contained" sx={{ marginLeft: '10px' }} onClick={payForTicket}>
            결제
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

const itemStyle = { display: 'flex', flexDirection: 'column', textAlign: 'center' }
const itemTypo = { fontSize: '12px', color: '#C4C4C4' }
