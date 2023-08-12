import React from 'react'
import Button from "@mui/material/Button";
import { MuiDatePickerStart } from "app/utils/temp/date-temp/mui-date-picker-start";
import { MuiDatePickerEnd } from "app/utils/temp/date-temp/mui-date-picker-end";
export function PeriodSearch() {
  return (
    <>
    <div className="search-box">
            <div className="date-wrap">
              <div className="btn-group">
                <Button variant="outlined" color="info" size="medium">
                  3개월
                </Button>
                <Button variant="outlined" color="info" size="medium">
                  6개월
                </Button>
                <Button variant="outlined" color="info" size="medium">
                  9개월
                </Button>
                <Button variant="outlined" color="info" size="medium">
                  1년
                </Button>
              </div>
              <MuiDatePickerStart />
              <span className="tilde">~</span>
              <MuiDatePickerEnd />
              <Button
                variant="outlined"
                color="info"
                size="medium"
                className="btn-search"
              >
                조회
              </Button>
            </div>
          </div>
    </>
  )
}
