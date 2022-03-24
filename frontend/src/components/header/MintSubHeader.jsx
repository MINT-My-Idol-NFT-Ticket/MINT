//pakages
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useNavigate } from 'react-router-dom'
//modules
import '../../styles/MintSubHeader.css'

function MintHeader({ content, bright }) {
  const navigate = useNavigate()
  const pushBack = () => navigate(-1)
  return (
    <>
      <div
        className="MintSubHeader"
        style={{
          borderBottom: `2px solid ${bright === 'light' ? '#222831' : '#EEEEEE'}`,
        }}>
        <a className="back__btn">
          <div className="icon">
            <ChevronLeftIcon onClick={pushBack} />
          </div>
          <div className="content">
            <span>{content}</span>
          </div>
        </a>
      </div>
    </>
  )
}

export default MintHeader
