import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

function MintHeader({ content, where }) {
  const navigate = useNavigate()
  const pushHome = () => {
    where ? navigate(`${where}`) : navigate('/home')
  }
  return (
    <>
      <Box
        className="MintSubHeader"
        sx={{
          display: 'flex',
          width: '100%',
          height: '50px',
          boxShadow: `0 -1px 20px 0 rgba(0,0,0,.2)`,
          zIndex: 100,
        }}>
        <a
          onClick={pushHome}
          style={{
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '10px',
          }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Box>
              <ChevronLeftIcon />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>{content}</span>
            </Box>
          </Box>
        </a>
      </Box>
    </>
  )
}

export default MintHeader
