import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import type { GetStaticProps, NextPage } from "next"
// ** 003. security / security-guard / send-temporary-password 임시비밀번호 발송
export default function Password(){
  return (
    <>
      <Box>
        <Typography>
          회원 비밀번호는 시스템담당자도 복호화할 수 없는 암호화된 정보로 저장 되어 있습니다. 회원이 비밀번호를 잊어
          문의하신 경우, 임시 비밀번호를 발급 해주세요.
        </Typography>
        <Box>
          <FormControlLabel value='end' control={<Checkbox />} label='회원에게 메세지 발송' labelPlacement='end' />
          <Button variant='contained' color='primary'>회원 임시 비밀번호 설정</Button>
        </Box>
      </Box>
    </>
  )
}
