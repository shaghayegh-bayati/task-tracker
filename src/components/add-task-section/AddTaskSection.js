import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { MDBBtn } from "mdb-react-ui-kit";
import TaskIcon from "@mui/icons-material/Task";
import { MyContext } from "../../App";
import Calendar from "../calendar/Calendar";
import SuccessSnackbar from "../success-snackabar/SuccessSnackbar";
import "./add-task-section.css";

function AddTaskSection() {
  const { dataArray, updateDataArray } = useContext(MyContext);

  const [dateCal, setDateCal] = useState(null);
  const [titleValue, setTitleValue] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const titleHandler = (event) => {
    setTitleValue(event.target.value);
  };

  const alertHandeler = () => {
    setShowAlert(true);
    setTimeout(() => {
      // After 3 seconds set the show value to false
      setShowAlert(false);
    }, 3000);
  };
  const addTaskHandler = (event) => {
    event.preventDefault();
    setError("");

    if (titleValue !== "" && titleValue !== "") {
      const newTask = { title: titleValue, date: dateCal, statusId: 1 };
      updateDataArray([...dataArray, newTask]);
      alertHandeler();
      setTitleValue("");
      setDateCal(null);
    } else {
      setError("لطفا همه موارد را پر کنید.");
    }
  };

  return (
    <div className="add-task">
      <h2 className="add-task-tit">
        <TaskIcon />
        <span>وظیفه جدید</span>
      </h2>
      <p className="add-task-text">
        لطفا فرم زیر را برای اضافه کردن وظیفه جدید، کامل کنید.
      </p>
      <form className="add-task-form">
        <TextField
          id="outlined-basic"
          label="عنوان"
          variant="outlined"
          fullWidth={true}
          className="mb-4"
          value={titleValue}
          onChange={titleHandler}
        />
        <Calendar dateCal={dateCal} setDateCal={setDateCal} />
        {error !== "" && <span className="add-task-error">{error}</span>}
        <MDBBtn
          className="add-task-save-btn"
          color="dark"
          onClick={addTaskHandler}
        >
          <span>ذخیره</span>
        </MDBBtn>
      </form>

      <SuccessSnackbar showAlert={showAlert} />
    </div>
  );
}

export default AddTaskSection;
