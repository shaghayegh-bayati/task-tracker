import React, { useContext } from "react";
import { MyContext } from "../../App";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import "./task-card.css";

function TaskCard(props) {
  const { dataArray, updateDataArray } = useContext(MyContext);
  const { title, date, statusId, color } = props;

  const backHandler = () => {
    const updatedArray = dataArray.map((item) => {
      if (item.title === title) {
        return { ...item, statusId: statusId - 1 };
      }
      return item;
    });

    updateDataArray(updatedArray);
  };

  const nextHandler = () => {
    const updatedArray = dataArray.map((item) => {
      if (item.title === title) {
        return { ...item, statusId: statusId + 1 };
      }
      return item;
    });

    updateDataArray(updatedArray);
  };

  const deleteHandler = () => {
    const updatedArray = dataArray.filter((item) => item.title !== title);

    updateDataArray(updatedArray);
  };

  return (
    <div className="task-card">
      <h6 className="task-card-tit" style={{ borderTop: `1px solid ${color}` }}>
        {/* <MDBIcon fas icon="circle" size="xs" /> */}
        <span>{title}</span>
      </h6>
      <span className="task-card-delete" onClick={deleteHandler}>
        <MDBIcon fas icon="trash-alt" className="" />
      </span>
      <div className="task-card-date">
        <MDBIcon fas icon="calendar-alt" className="ps-2" size="sm" />
        <span>{date}</span>
      </div>

      <div
        className={
          statusId === 1
            ? "d-flex justify-content-end mt-2"
            : "d-flex justify-content-between mt-2"
        }
      >
        {(statusId === 2 || statusId === 3) && (
          <MDBBtn
            className=" task-card-btn-back"
            color="danger"
            onClick={backHandler}
          >
            <MDBIcon fas icon="angle-right" className="ps-2" />
            <span>قبلی</span>
          </MDBBtn>
        )}
        {(statusId === 1 || statusId === 2) && (
          <MDBBtn
            className=" task-card-btn-next"
            color="success"
            onClick={nextHandler}
          >
            <span>بعدی</span>
            <MDBIcon fas icon="angle-left" className="pe-2" />
          </MDBBtn>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
