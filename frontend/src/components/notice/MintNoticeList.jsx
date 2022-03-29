import React from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

function MintNoticeList(props) {
  const pages = [
    {
      title: '지갑 생성하기',
      url: '/notice/1',
    },
    {
      title: '지갑 주소 확인하기',
      url: '/notice/2',
    },
    {
      title: '지갑 개인키 확인하기',
      url: '/notice/3',
    },
    {
      title: '기타',
      url: '',
    },
  ]

  return (
    <Box sx={{ padding: '0 24px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '50px',
          alignItems: 'center',
        }}>
        <Typography sx={{ fontSize: '26px', fontWeight: '600', marginBottom: '10px' }}>HOW TO</Typography>
        <KeyboardArrowDownIcon />
      </Box>
      {pages.map((page, idx) => {
        return <PageBox key={page.title} title={page.title} url={page.url} lock={idx === 3 ? true : false} />
      })}
    </Box>
  )
}

function PageBox({ title, url, lock }) {
  const navigate = useNavigate()
  const passNav = () => {
    navigate(url)
  }
  return (
    <Box
      sx={{
        width: '100%',
        height: '80px',
        borderRadius: '14px',
        backgroundColor: lock ? '#C8C8C8' : '#8811DD',
        color: 'white',
        fontSize: '18px',
        lineHeight: '80px',
        paddingLeft: '30px',
        boxSizing: 'border-box',
        marginTop: '22px',
        boxShadow: '1px 3px 10px rgba(0, 0, 0, 0.3)',
        cursor: lock ? 'not-allowed' : 'pointer',
      }}
      onClick={passNav}>
      {title}
    </Box>
  )
}

export default MintNoticeList
