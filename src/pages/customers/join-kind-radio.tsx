import React from 'react'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'

export function JoinKindRadio() {
  return (
    <>
      <p>
        회원가입시 일반고객으로 기본 등록됩니다.
        <br />
        변경할 회원유형을 선택한 후 수정 버튼을 클릭해 주세요.
      </p>
      <RadioGroup defaultValue='0' className='mt16'>
        <FormControlLabel value='0' label='최우수고객' labelPlacement='end' control={<Radio />} />
        <FormControlLabel value='1' control={<Radio />} label='우수고객' />
        <FormControlLabel value='2' control={<Radio />} label='일반고객' />
        <FormControlLabel value='3' control={<Radio />} label='주의고객' />
        <FormControlLabel value='4' control={<Radio />} label='항의고객' />
      </RadioGroup>
    </>
  )
}
