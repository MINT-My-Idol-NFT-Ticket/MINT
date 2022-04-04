import { Modal, Box, Typography, TextField, Button } from '@mui/material'
import { useLocation } from 'react-router-dom'

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

export default function MintConcertPaymentModal({ open, handleClose }) {
  const location = useLocation()
  console.log(location.state, '모달데이터')
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description">
      <Box sx={{ ...style, minWidth: '340px', maxWidth: '414px' }}>
        <Typography variant="h6">결제를 진행합니다...</Typography>
        <Typography>결제 예상 금액 : {location.state.price} SSF</Typography>
        <Typography>지갑 잔액: {'얼마'} SSF</Typography>
        <Typography>결제 후 예상 잔액: {'얼마'} SSF</Typography>
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
