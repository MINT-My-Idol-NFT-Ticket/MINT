import React, { useEffect, useState } from 'react'
import { Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import KeyIcon from '@mui/icons-material/Key'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber'
import LockOpenIcon from '@mui/icons-material/LockOpen'

import useBrightness from '../../hooks/useBrightness'
import { checkMessage } from '../../functions/alert/alertFunctions'

function MintFooterMenus() {
  const [bright, _] = useBrightness()

  const handleRegist = () => {
    checkMessage(
      '지갑 등록이 해제되었습니다',
      () => {
        navigate('/wallet')
      },
      bright,
    )
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
    <List sx={{ width: '100%', maxWidth: '414px' }}>
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
        <ListItemButton onClick={handleRegist}>
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText primary={'지갑 재등록'}></ListItemText>
          <Divider />
        </ListItemButton>
      </ListItem>
    </List>
  )
}

export default MintFooterMenus
