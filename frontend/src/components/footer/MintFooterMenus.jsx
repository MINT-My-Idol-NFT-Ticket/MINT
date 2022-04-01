import React from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
// icons
import HomeIcon from '@mui/icons-material/Home'
import LiveHelpIcon from '@mui/icons-material/LiveHelp'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'

function MintFooterMenus(props) {
  const menus = [
    {
      title: '메인으로',
      url: 'home',
      icon: <HomeIcon />,
    },
    {
      title: '이용안내',
      url: 'notice',
      icon: <LiveHelpIcon />,
    },
    {
      title: '마이페이지',
      url: 'mypage',
      icon: <AccountCircleIcon />,
    },
    {
      /* 세션 스토리지에서 주소 삭제 후
      로그아웃 alert 보내기 */
      title: '로그아웃',
      url: 'home',
      icon: <LockIcon />,
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
    </List>
  )
}

export default MintFooterMenus
