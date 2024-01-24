import React from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "./nasa-card.css";

function NasaCard(props) {
  const { data, loading } = props;

  return (
    <MDBCard className="nasa-card">
      <MDBRow className="g-0">
        <MDBCol md="5">
          <MDBCardImage
            src={data.url}
            alt="..."
            fluid
            className="nasa-card-img"
          />
        </MDBCol>
        <MDBCol md="7">
          <MDBCardBody>
            <MDBCardTitle className="nasa-card-tit">{data.title}</MDBCardTitle>
            <MDBCardText className="nasa-card-exp">
              {data.explanation}
            </MDBCardText>
            <MDBCardText>
              <small className="text-muted">Date: {data.date}</small>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
  );
}

export default NasaCard;
