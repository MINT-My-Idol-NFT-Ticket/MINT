import React, { useEffect, useState } from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import KeyIcon from '@mui/icons-material/Key'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import LockIcon from '@mui/icons-material/Lock'
import LockOpenIcon from '@mui/icons-material/LockOpen'

function MintFooterMenus(props) {
  const [isLogin, setIsLogin] = useState(false)
  useEffect(() => {
    const address = sessionStorage.getItem('address')
    console.log(address, '세션address')
    if (address) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])
  const handleLogin = () => {
    if (isLogin) {
      sessionStorage.removeItem('address')
      setIsLogin(false)
      props.drawer()
      alert('로그아웃 되었습니다.')
    } else {
      alert('지갑 연동 페이지로 이동합니다.')
      navigate('/wallet')
    }
  }

  const menus = [
    {
      title: '지갑 생성하기',
      url: 'notice/1',
      icon: <AccountBalanceWalletIcon />,
    },
    {
      title: '지갑 주소 확인하기',
      url: 'notice/2',
      icon: <ConfirmationNumberIcon />,
    },
    {
      title: '지갑 개인키 확인하기',
      url: 'notice/3',
      icon: <KeyIcon />,
    },
  ]

  const navigate = useNavigate()
  const handleLink = url => {
    navigate(`/${url}`)
  }

  return (
    <List>
      {menus.map((menu, idx) => {
        return (
          <ListItem key={menu.title + idx} disablePadding>
            <ListItemButton
              onClick={() => {
                handleLink(menu.url)
              }}>
              <ListItemIcon>{menu.icon}</ListItemIcon>
              <ListItemText primary={menu.title}></ListItemText>
              <Divider />
            </ListItemButton>
          </ListItem>
        )
      })}
      <ListItem disablePadding>
        <ListItemButton onClick={handleLogin}>
          <ListItemIcon>{isLogin ? <LockIcon /> : <LockOpenIcon />}</ListItemIcon>
          <ListItemText primary={isLogin ? '로그아웃' : '로그인'}></ListItemText>
          <Divider />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default MintFooterMenus
