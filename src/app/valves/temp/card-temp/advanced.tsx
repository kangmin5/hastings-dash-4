// ** MUI Imports
import Grid from "@mui/material/Grid";

// ** Demo Components Imports
import CardTeamMembers from "views/ui/cards/advanced/CardTeamMembers";
import CardPlanUpgrade from "views/ui/cards/advanced/CardPlanUpgrade";
import CardCafeBadilico from "views/ui/cards/advanced/CardCafeBadilico";
import CardTransactions from "views/ui/cards/advanced/CardTransactions";
import CardTotalEarnings from "views/ui/cards/advanced/CardTotalEarings";
import CardFinanceSummary from "views/ui/cards/advanced/CardFinanceSummary";
import CardDepositWithdraw from "views/ui/cards/advanced/CardDepositWithdraw";
import CardSocialAnalytics from "views/ui/cards/advanced/CardSocialAnalytics";
import CardMeetingSchedule from "views/ui/cards/advanced/CardMeetingSchedule";
import CardDeveloperMeetup from "views/ui/cards/advanced/CardDeveloperMeetup";
import CardSalesByCountries from "views/ui/cards/advanced/CardSalesByCountries";
import CardActivityTimeline from "views/ui/cards/advanced/CardActivityTimeline";
import CardWebsiteStatistics from "views/ui/cards/advanced/CardWebsiteStatistics";

const CardsAdvanced = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={4}>
        <CardTransactions />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardPlanUpgrade />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardMeetingSchedule />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <CardTeamMembers />
      </Grid>
      <Grid item xs={12} lg={7}>
        <CardDepositWithdraw />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardTotalEarnings />
      </Grid>
      <Grid item xs={12} md={6} lg={5}>
        <CardFinanceSummary />
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <CardSocialAnalytics />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardWebsiteStatistics />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardDeveloperMeetup />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardSalesByCountries />
      </Grid>
      <Grid item xs={12} md={6} lg={8}>
        <CardActivityTimeline />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CardCafeBadilico />
      </Grid>
    </Grid>
  );
};

export default CardsAdvanced;
