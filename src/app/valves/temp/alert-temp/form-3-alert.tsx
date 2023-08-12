// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

export default function FormAlert (props : any) {
  // **
  const { hidden, content, form, label } = props

  // ** State
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //   useEffect(() => {
  //     setButtonName(buttonName)
  //   }, [buttonName])

  return (
    <Fragment>
      <Button variant='outlined' onClick={handleClickOpen}>
        {label}
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <div>
          {/* <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle> */}
          <DialogContent>
            <DialogContentText sx={{ color: '#222' }} id='alert-dialog-description'>
              {content}
            </DialogContentText>
          </DialogContent>
          <DialogActions className='dialog-actions-dense' >
            {hidden === true ? (
              <Button type='submit' form={form} onClick={handleClose}>
                확인
              </Button>
            ) : (
              <>
                <Button onClick={handleClose}>취소</Button>
                <Button onClick={handleClose}>확인</Button>
              </>
            )}
          </DialogActions>
        </div>
      </Dialog>
    </Fragment>
  )
}

