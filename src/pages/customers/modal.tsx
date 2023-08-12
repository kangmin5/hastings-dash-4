// ** React Imports
import React from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box';
// ** Icon Imports
import Icon from '@core/components/icon'

export  function Modal(props: any) {
  // ** Props
  const { open, close, header, width, hidden, content } = props

  console.log('모달 너비 : ', width)

  let tmpData

  const ContentComponent = () => React.cloneElement(content, { handleData })

  const handleData = props => {
    tmpData = props
  }

  // ** State

  // ** 모달 사이즈 정의
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
             // width: width === 'sm' ? '29rem' : width === 'md' ? '44rem' : width === 'lg' ? '66.5rem' : '29rem'
            // ** 2023 08 04 modal.css 파일이 있고, 여기에 값이 있으면 xl 이 적용되지 않음.
            // global.css 에서 modal.css 주석으로 제거해야 xl 사이즈가 적용됨.
          }
        }
      }
    }
  })

  const DialogActions = styled('div')({
    // padding: theme => theme.spacing(3) + ' !important'
  })

  React.useEffect(() => {
    console.log(' 모달 실행 ... ')
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      {open ? (
        // <Dialog  onClose={close} aria-labelledby='customized-dialog-title' open={open}>
          <Dialog
          fullScreen={false} fullWidth={false}  maxWidth={width}
          onClose={close} aria-labelledby='customized-dialog-title' open={open}>
            <div style={{width: '1300'}}>
            <Box
           className="modal-fullscreen-xxl-up" style={{width: '100%'}}
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}

            >
          <DialogTitle id='customized-dialog-title' sx={{ p: 4 }}>
            <Typography variant='h6' component='span'>
              {header}
              {props.title}
            </Typography>
            <IconButton
              aria-label='close'
              onClick={close}
              sx={{ top: 10, right: 10, position: 'absolute', color: 'grey.500' }}
            >
              <Icon icon='mdi:close' />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers sx={{ p: 4 }}>
            {/* {content} */}
            <ContentComponent />
          </DialogContent>
          <DialogActions>
            {hidden === 'true' ? (
              <Button
                onClick={() => {
                  close()
                }}
              >
                확인
              </Button>
            ) : (
              <>
                <Button onClick={close}>취소</Button>
                <Button
                  onClick={() => {
                    close()
                  }}
                >
                  확인
                </Button>
              </>
            )}
          </DialogActions>
          </Box>
          </div>
        </Dialog>
      ) : null}
    </ThemeProvider>
  )
}
