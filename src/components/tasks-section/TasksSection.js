import React, { useEffect, useState } from "react";

import "./tasks-section.css";
import TaskColumn from "../task-column/TaskColumn";

function TasksSection(props) {
  const { dataArray } = props;

  const [column1, setColumn1] = useState([]);
  const [column2, setColumn2] = useState([]);
  const [column3, setColumn3] = useState([]);

  useEffect(() => {
    setColumn1(dataArray.filter((item) => item.statusId === 1));
    setColumn2(dataArray.filter((item) => item.statusId === 2));
    setColumn3(dataArray.filter((item) => item.statusId === 3));
  }, [dataArray]);

  return (
    <main className="tasks-section">
      <TaskColumn title="انجام نشده" color="#B33951" data={column1} />
      <TaskColumn title="درحال انجام" color="#FFD449" data={column2} />
      <TaskColumn title="انجام شده" color="#548C2F" data={column3} />
    </main>
  );
}

export default TasksSection;
