// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from '@core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from '@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from '@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import AnalyticsTable from 'views/dashboards/analytics/AnalyticsTable'
import AnalyticsTrophy from 'views/dashboards/analytics/AnalyticsTrophy'
import AnalyticsSessions from 'views/dashboards/analytics/AnalyticsSessions'
import AnalyticsTotalProfit from 'views/dashboards/analytics/AnalyticsTotalProfit'
import AnalyticsPerformance from 'views/dashboards/analytics/AnalyticsPerformance'
import AnalyticsTotalEarning from 'views/dashboards/analytics/AnalyticsTotalEarning'
import AnalyticsWeeklyOverview from 'views/dashboards/analytics/AnalyticsWeeklyOverview'
import AnalyticsDepositWithdraw from 'views/dashboards/analytics/AnalyticsDepositWithdraw'
import AnalyticsSalesByCountries from 'views/dashboards/analytics/AnalyticsSalesByCountries'
import AnalyticsTransactionsCard from 'views/dashboards/analytics/AnalyticsTransactionsCard'

const AnalyticsDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <AnalyticsTrophy />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsTransactionsCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsWeeklyOverview />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsTotalEarning />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <AnalyticsTotalProfit />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='$25.6k'
                icon={<Icon icon='mdi:poll' />}
                color='secondary'
                trendNumber='+42%'
                title='Total Profit'
                subtitle='Weekly Profit'
              />
            </Grid>
            <Grid item xs={6}>
              <CardStatisticsVerticalComponent
                stats='862'
                trend='negative'
                trendNumber='-18%'
                title='New Project'
                subtitle='Yearly Project'
                icon={<Icon icon='mdi:briefcase-variant-outline' />}
              />
            </Grid>
            <Grid item xs={6}>
              <AnalyticsSessions />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <AnalyticsPerformance />
        </Grid>
        <Grid item xs={12} md={8}>
          <AnalyticsDepositWithdraw />
        </Grid>
        <Grid item xs={12} md={4}>
          <AnalyticsSalesByCountries />
        </Grid>
        <Grid item xs={12} md={12} lg={8}>
          <AnalyticsTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default AnalyticsDashboard
