import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import Icon from '@core/components/icon'

export function CustomModal(props: any ) {
  const { isOpen, close, header, width, hidden, content } = props
  let tmpData //eslint-disable-line no-unused-vars
  const ContentComponent = () => React.cloneElement(content, { handleData })
  const handleData = (props : any) => {
    tmpData = props
  }

  // ** 모달 사이즈 정의
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            // width: width === 'sm' ? '29rem' : width === 'md' ? '44rem' : width === 'lg' ? '66.5rem' : '29rem'
            // ** 2023 03 15 나 보기 좋으려고 잠시 수정
            width: width === 'sm' ? '29rem' : width === 'md' ? '44rem' : width === 'lg' ? '1300px' : '29rem'
          }
        }
      }
    }
  })

  // const DialogActions = styled('div')({
  //   padding: theme => theme.spacing(3) + ' !important'
  // })
  const DialogActions = styled('div')({})

  return (
    <ThemeProvider theme={theme}>
      {/* <Button variant='outlined' onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      {isOpen ? (
        <Dialog maxWidth='sm' onClose={close} aria-labelledby='customized-dialog-title' open={isOpen}>
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
          <DialogActions className='dialog-footer'>
            {hidden === 'true' ? (
              <Button className='primary'
                onClick={() => {
                  close()
                }}
              >
                확인
              </Button>
            ) : (
              <>
                <Button className='default' onClick={close}>취소</Button>
                <Button className='primary'
                  onClick={() => {
                    close()
                  }}
                >
                  확인
                </Button>
              </>
            )}
          </DialogActions>
        </Dialog>
      ) : null}
    </ThemeProvider>
  )
}
