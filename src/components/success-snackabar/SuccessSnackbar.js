import * as React from "react";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import "./success-snackabar.css";

export default function SuccessSnackbar({ showAlert }) {
  const vertical = "top";
  const horizontal = "right";

  return (
    <>
      {showAlert && (
        <Box>
          <Snackbar
            id="add-task-snack"
            anchorOrigin={{ vertical, horizontal }}
            open={showAlert}
            message="وظیفه مورد نظر با موفقیت ثبت شد."
            key={vertical + horizontal}
          />
        </Box>
      )}
    </>
  );
}
