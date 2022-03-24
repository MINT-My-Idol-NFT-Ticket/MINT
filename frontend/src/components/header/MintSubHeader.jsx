//pakages
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
//modules
import '../../styles/MintSubHeader.css'

function MintHeader({ content, bright }) {
  return (
    <>
      <div
        className="MintSubHeader"
        style={{
          borderBottom: `2px solid ${bright === 'light' ? '#222831' : '#EEEEEE'}`,
        }}>
        <a className="back__btn">
          <div className="icon">
            <ChevronLeftIcon />
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
