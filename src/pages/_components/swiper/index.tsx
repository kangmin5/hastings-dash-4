// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from '@core/components/page-header'
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import SwiperLoop from 'views/components/swiper/SwiperLoop'
import SwiperZoom from 'views/components/swiper/SwiperZoom'
import SwiperFader from 'views/components/swiper/SwiperFader'
import SwiperDefault from 'views/components/swiper/SwiperDefault'
import SwiperSpacing from 'views/components/swiper/SwiperSpacing'
import SwiperFreeMode from 'views/components/swiper/SwiperFreeMode'
import SwiperCentered from 'views/components/swiper/SwiperCentered'
import SwiperVertical from 'views/components/swiper/SwiperVertical'
import SwiperControls from 'views/components/swiper/SwiperControls'
import SwiperThumbnails from 'views/components/swiper/SwiperThumbnails'
import SwiperAutoSwitch from 'views/components/swiper/SwiperAutoSwitch'
import SwiperMultipleSlides from 'views/components/swiper/SwiperMultipleSlides'
import SwiperMutationObserver from 'views/components/swiper/SwiperMutationObserver'

// ** Styled Component Import
import KeenSliderWrapper from '@core/styles/libs/keen-slider'

// ** Source code imports
import * as source from 'views/components/swiper/SwiperSourceCode'

// ** Hook Import
import { useSettings } from '@core/hooks/useSettings'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const Swiper = () => {
  // ** Hook
  const {
    settings: { direction }
  } = useSettings()

  return (
    <KeenSliderWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          subtitle={<Typography variant='body2'>Easily create sliders, carousels and much more</Typography>}
          title={
            <Typography variant='h5'>
              <LinkStyled href='https://github.com/rcbyr/keen-slider' target='_blank'>
                Keen Slider
              </LinkStyled>
            </Typography>
          }
        />
        <Grid item xs={12}>
          <CardSnippet
            title='Default'
            code={{
              tsx: source.SwiperDefaultTSXCode,
              jsx: source.SwiperDefaultJSXCode
            }}
          >
            <SwiperDefault direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Loop'
            code={{
              tsx: source.SwiperLoopTSXCode,
              jsx: source.SwiperLoopJSXCode
            }}
          >
            <SwiperLoop direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Multiple Slides'
            code={{
              tsx: source.SwiperMultipleSlidesTSXCode,
              jsx: source.SwiperMultipleSlidesJSXCode
            }}
          >
            <SwiperMultipleSlides direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Spacing'
            code={{
              tsx: source.SwiperSpacingTSXCode,
              jsx: source.SwiperSpacingJSXCode
            }}
          >
            <SwiperSpacing direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='FreeMode'
            code={{
              tsx: source.SwiperFreeModeTSXCode,
              jsx: source.SwiperFreeModeJSXCode
            }}
          >
            <SwiperFreeMode direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Centered'
            code={{
              tsx: source.SwiperCenteredTSXCode,
              jsx: source.SwiperCenteredJSXCode
            }}
          >
            <SwiperCentered direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Vertical'
            code={{
              tsx: source.SwiperVerticalTSXCode,
              jsx: source.SwiperVerticalJSXCode
            }}
          >
            <SwiperVertical />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Controls'
            code={{
              tsx: source.SwiperControlsTSXCode,
              jsx: source.SwiperControlsJSXCode
            }}
          >
            <SwiperControls direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Thumbnails'
            code={{
              tsx: source.SwiperThumbnailsTSXCode,
              jsx: source.SwiperThumbnailsJSXCode
            }}
          >
            <SwiperThumbnails direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Fader'
            code={{
              tsx: source.SwiperFaderTSXCode,
              jsx: source.SwiperFaderJSXCode
            }}
          >
            <SwiperFader direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Zoom'
            code={{
              tsx: source.SwiperZoomTSXCode,
              jsx: source.SwiperZoomJSXCode
            }}
          >
            <SwiperZoom direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Auto Switch'
            code={{
              tsx: source.SwiperAutoSwitchTSXCode,
              jsx: source.SwiperAutoSwitchJSXCode
            }}
          >
            <SwiperAutoSwitch direction={direction} />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Mutation Observer'
            code={{
              tsx: source.SwiperMutationObserverTSXCode,
              jsx: source.SwiperMutationObserverJSXCode
            }}
          >
            <SwiperMutationObserver direction={direction} />
          </CardSnippet>
        </Grid>
      </Grid>
    </KeenSliderWrapper>
  )
}

export default Swiper
