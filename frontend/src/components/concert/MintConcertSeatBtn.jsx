import { Button, createTheme, ThemeProvider } from '@mui/material'
import React, { useEffect, useState } from 'react'

// 맨아래
function MintConcertSeat(props) {
  const handleSelect = () => {
    props.handleSeat(props.data.name)
    props.setSelected(props.idx)
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8811DD',
        light: '#DECAEB',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            minWidth: '40px',
            maxWidth: '40px',
            height: '40px',
          },
        },
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{ margin: '3px' }}
        onClick={() => {
          props.handleSelect(props.idx)
        }}
        disabled={props.data.status === 0 ? false : true}
        variant={props.selected ? 'outlined' : 'contained'}>
        {props.data.name.slice(props.data.name.lastIndexOf('-') + 1)}
      </Button>
    </ThemeProvider>
  )
}

export default MintConcertSeat
