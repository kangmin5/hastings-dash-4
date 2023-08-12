import { useRouter } from 'next/router'
import { Grid, Box, Typography } from '@mui/material'
import { useAppSelector } from 'custom-hooks'
import { RootState } from 'store'
import Icon from '@core/components/icon'

// ** 025. 이미지뷰어
export default function ThePicture() {
  const router = useRouter()
  const { id } = router.query
  const row = useAppSelector((state: RootState) => state.picture.thePicture)


  return (
    <Grid container direction='row' justifyContent='flex-start' >
      <Grid item xs>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Icon icon='twemoji:letter-b' />
            <Typography>경로 아이디 {id}</Typography>
            <Typography>DB 아이디 {row.id}</Typography>
            <Typography>최초 등록일 : {row.createdAt}</Typography>
            <Typography>최종 수정일 : {row.updatedAt}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
