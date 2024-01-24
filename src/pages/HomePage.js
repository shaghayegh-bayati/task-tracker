import React, { useContext } from "react";
import { MyContext } from "../App";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import TasksSection from "../components/tasks-section/TasksSection";

function HomePage() {
  const { dataArray } = useContext(MyContext);

  return (
    <>
      <Header />
      <div className="d-md-flex">
        <Sidebar />
        <TasksSection dataArray={dataArray} />
      </div>
    </>
  );
}

export default HomePage;
