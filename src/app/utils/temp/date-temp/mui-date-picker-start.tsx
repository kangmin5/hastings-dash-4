import * as React from "react";
import TextField from "@mui/material/TextField";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Stack from "@mui/material/Stack";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import AcUnitIcon from "@mui/icons-material/AcUnit";




// ** yarn add @material-ui/pickers

export function MuiDatePickerStart() {
  const [startDate, setStartDate] = React.useState()
 //  dateAdapter 에러 발생
 const dateFormat = dayjs(startDate).format("YYYY-MM-DD");
  return (
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
	      label={"시작 (From)"}
	      value={startDate}
        inputFormat={"yyyy-MM-dd"}
        mask={"____-__-__"}
	      onChange={(newValue) => {
            setStartDate(newValue)
	      }}
	      renderInput={(params) => <TextField {...params} />}
	  />
    </LocalizationProvider>
  );
}
