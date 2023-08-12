import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import dayjs from "dayjs";



// ** yarn add @material-ui/pickers

export function MuiDatePickerEnd() {
  const [endDate, setEndDate] = React.useState()
 //  dateAdapter 에러 발생
 const dateFormat = dayjs(endDate).format("YYYY-MM-DD");
  return (
     <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
	      label={"종료 (To)"}
	      value={endDate}
        inputFormat={"yyyy-MM-dd"}
        mask={"____-__-__"}
	      onChange={(newValue) => {
          setEndDate(newValue)
	      }}
	      renderInput={(params) => <TextField {...params} />}
	  />
    </LocalizationProvider>
  );
}
