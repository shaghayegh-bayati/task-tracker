import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//pages
import HomePage from "../pages/HomePage";
import AddTaskPage from "../pages/AddTaskPage";
import NasaPage from "../pages/NasaPage";

const Layout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/nasa" element={<NasaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Layout;
