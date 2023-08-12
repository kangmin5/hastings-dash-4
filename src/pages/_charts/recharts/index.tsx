// ** Next Import
import Link from 'next/link'
import dynamic from 'next/dynamic'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from '@core/components/page-header'

// ** Hooks
import { useSettings } from '@core/hooks/useSettings'

// ** Styled Components
import RechartsWrapper from '@core/styles/libs/recharts'
import DatePickerWrapper from '@core/styles/libs/react-datepicker'

// ** Demo Components Imports
const RechartsBarChart = dynamic(() => import('views/charts/recharts/RechartsBarChart'), { ssr: false })
const RechartsPieChart = dynamic(() => import('views/charts/recharts/RechartsPieChart'), { ssr: false })
const RechartsLineChart = dynamic(() => import('views/charts/recharts/RechartsLineChart'), { ssr: false })
const RechartsAreaChart = dynamic(() => import('views/charts/recharts/RechartsAreaChart'), { ssr: false })
const RechartsRadarChart = dynamic(() => import('views/charts/recharts/RechartsRadarChart'), { ssr: false })
const RechartsScatterChart = dynamic(() => import('views/charts/recharts/RechartsScatterChart'), { ssr: false })

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Recharts = () => {
  // ** Hooks
  const { settings } = useSettings()

  return (
    <RechartsWrapper>
      <DatePickerWrapper>
        <Grid container spacing={6}>
          <PageHeader
            title={
              <Typography variant='h5'>
                <LinkStyled href='https://github.com/recharts/recharts' target='_blank'>
                  Recharts
                </LinkStyled>
              </Typography>
            }
            subtitle={<Typography variant='body2'>Redefined chart library built with React and D3</Typography>}
          />
          <Grid item xs={12}>
            <RechartsLineChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12}>
            <RechartsAreaChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12}>
            <RechartsScatterChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12}>
            <RechartsBarChart direction={settings.direction} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsRadarChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <RechartsPieChart />
          </Grid>
        </Grid>
      </DatePickerWrapper>
    </RechartsWrapper>
  )
}

export default Recharts
