import React from "react";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import NasaCard from "../nasa-card/NasaCard";
import "./nasa-section.css";

function NasaSection(props) {
  const { data, loading } = props;
  return (
    <div dir="ltr" className="nasa-section">
      <MDBRow>
        {data.map((item) => (
          <MDBCol size={12} md={6} key={item.date}>
            <NasaCard data={item} loading={loading} />
          </MDBCol>
        ))}
      </MDBRow>
    </div>
  );
}

export default NasaSection;
