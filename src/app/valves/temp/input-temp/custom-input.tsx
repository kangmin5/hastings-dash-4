import React from 'react'
import styled from 'styled-components'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'


// export interface Props {
//   placeholder?: string
//   disabled?: boolean
//   readOnly?: boolean
//   buttonOnly?: boolean
//   value?: Date | string
//   onClick?(e: React.MouseEvent<HTMLElement>): void
//   InputProps?: any
// }

// = React.forwardRef<HTMLElement, Props>


export default class CustomInput {

  InputWrapper = styled.div`
    display: flex;
    align-items: center;
    min-width: 40%;
    min-height: 48px;
    font-size: 16px;
    padding: 6px 8px 6px 15px;
    border: 1px solid black;
    border-radius: 8px;
    overflow: hidden;
  `
  Input = styled.input`
    flex: 1;
    border: none;
    outline: none;
    font-size: inherit;
    background: transparent;
  `

  inputCalendarToday({ value, onClick, disabled, readOnly, buttonOnly, ...props }: any, 
    ref: React.Ref<HTMLDivElement>){
    return (
      <this.InputWrapper ref={ref} {...props}>
        <this.Input value={value} onClick={onClick}></this.Input>
        {props.InputProps ? props.InputProps.endAdornment : <CalendarTodayIcon onClick={onClick} />}
      </this.InputWrapper>
    )
  }

}


