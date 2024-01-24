import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import NasaSection from "../components/nasa-section/NasaSection";

function NasaPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((response) => {
        const data =response.data
        setData([data , data , data ,data]);
        setLoading(false);
      })
      .catch((error) => {
        // alert(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="d-md-flex">
        <Sidebar />
        <NasaSection data={data} loading={loading} />
      </div>
    </>
  );
}

export default NasaPage;
