// ** React Imports
import React from 'react'

// ** MUI Imports
import { GridProps } from '@mui/material/Grid'

// ** Type Imports
import { IconProps } from '@iconify/react'
import { ThemeColor } from '@core/layouts/types'

// ** Types of Basic Custom Radios
export type CustomRadioBasicData = {
  value: string
  content?: React.ReactNode
  isSelected?: boolean
} & (
  | {
      meta: React.ReactNode
      title: React.ReactNode
    }
  | {
      meta?: never
      title?: never
    }
  | {
      title: React.ReactNode
      meta?: never
    }
)
export type CustomRadioBasicProps = {
  name: string
  selected: string
  color?: ThemeColor
  gridProps: GridProps
  data: CustomRadioBasicData
  handleChange: (prop: string | React.ChangeEvent<HTMLInputElement>) => void
}

// ** Types of Custom Radios with Icons
export type CustomRadioIconsData = {
  value: string
  title?: React.ReactNode
  content?: React.ReactNode
  isSelected?: boolean
}
export type CustomRadioIconsProps = {
  name: string
  icon?: string
  selected: string
  color?: ThemeColor
  gridProps: GridProps
  data: CustomRadioIconsData
  iconProps?: Omit<IconProps, 'icon'>
  handleChange: (prop: string | React.ChangeEvent<HTMLInputElement>) => void
}

// ** Types of Custom Radios with Images
export type CustomRadioImgData = {
  alt?: string
  value: string
  img: React.ReactNode
  isSelected?: boolean
}
export type CustomRadioImgProps = {
  name: string
  selected: string
  color?: ThemeColor
  gridProps: GridProps
  data: CustomRadioImgData
  handleChange: (prop: string | React.ChangeEvent<HTMLInputElement>) => void
}
