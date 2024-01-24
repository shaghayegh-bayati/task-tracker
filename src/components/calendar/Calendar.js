import React, { useMemo, useEffect, useState } from "react";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { format } from "date-fns-jalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useTheme from "@mui/system/useTheme";

import "./calendar.css";

const Calendar = (props) => {
  const { dateCal, setDateCal } = props;

  const existingTheme = useTheme();
  const theme = useMemo(
    () => createTheme({ direction: "rtl" }, existingTheme),
    [existingTheme]
  );

  const [value, setValue] = useState(dateCal);

  useEffect(() => {
    if (!dateCal) {
      setValue(dateCal);
    }
  }, [dateCal]);

  const dateHandler = (newValue) => {
    setValue(newValue);
    setDateCal(format(newValue, "yyyy-MM-dd"));
  };

  return (
    <ThemeProvider theme={theme}>
      <div dir="rtl">
        <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
          <DatePicker
            label="تاریخ انجام"
            value={value}
            onChange={(newValue) => dateHandler(newValue)}
            fullWidth={true}
            className="w-100 mb-4"
          />
        </LocalizationProvider>
      </div>
    </ThemeProvider>
  );
};

export default Calendar;
