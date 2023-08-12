/**
* ===============================================
* DATE             AUTHOR          NOTE
* -----------------------------------------------
* Mar 23 2023     Paris   Create Board Component WriteMemo.jsx
*/

import { Box, FormControl, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { useState } from 'react'

// ** Icon Imports
import Icon from '@core/components/icon'

export  function WriteMemo(props) {
  const [clear, setClear] = useState('')
  const { handleData } = props

  const handleClearClick = () => {
    setClear('')
  }

  const handleChange = event => {
    handleData(event.target.value)
    setClear(event.target.value)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant='body1'>
        고객간단메모는 요약된 고객에 대한 멘트이며, 관리자만 볼 수 있습니다.(단, 영문200글자[한글100글자])
      </Typography>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '3rem' }}>
          <Typography variant='body1'>메모</Typography>
        </Box>
        {/* <FormControl sx={{ m: 1, width: '40rem' }} variant='filled'> */}
          <TextField
            fullWidth
            multiline
            rows={5}
            variant='outlined'
            value={clear}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton sx={{ bottom: '45px' }} onClick={handleClearClick}>
                    <Icon icon='ph:x' />
                  </IconButton>
                  {/* {clear && (
                    <IconButton onClick={handleClearClick}>
                      <Icon icon='ph:x' />
                    </IconButton>
                  )} */}
                </InputAdornment>
              )
            }}
          />
          {/* <TextField fullWidth rows={5} multiline variant='outlined' /> */}
        {/* </FormControl> */}
      </Box>
    </Box>
  )
}
