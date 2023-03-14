import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import hrc from "../../Assets/hrc.png";
import prayag from "../../Assets/prayag.png";
import jhar from "../../Assets/jhar.png";
import ey from "../../Assets/ey.png";
import { Container, Row, Col } from "react-bootstrap";

import Tilt from "react-parallax-tilt";
function Experience() {
  return (
    <Container>
    {/* <Row className="ed-card">
    <Col md={2} >
        <Tilt>
          <img src={ey} className="img-fluid" style={{padding:"10%"}} alt="avatar" />
        </Tilt>
      </Col>
      <Col md={8} >
        <h3 style={{ textAlign: "left"}}>Associate Software Engineer</h3>
        <h5 className="purple" style={{ textAlign: "left"}}>Ernst and Young</h5>
        <p style={{ fontSize: "0.89em", textAlign: "left",paddingBottom: "20px" ,color:"black"}}>A Cloud Engineer with DotNet and GCP Experience.
      </p></Col>
      
    </Row> */}
    <br/>
    <Row className="ed-card">
    <Col md={2} >
        <Tilt>
          <img src={hrc} className="img-fluid" style={{padding:"10%",paddingTop:"60px"}} alt="avatar" />
        </Tilt>
      </Col>
      <Col md={8} >
        <h3 style={{ textAlign: "left"}}>Digital Transformation Consultant</h3>
        <h5 className="purple" style={{ textAlign: "left"}}>Highradius</h5>
        <p style={{ fontSize: "0.89em", textAlign: "left",paddingBottom: "20px" ,color:"black"}}>
        <ul>
        <li>Analyzed Client's live data using Analytical and Visualization tools to improve the Client’s AR Process.</li> 
        
        <li>Created Design, Fit-Gap documents to identify the gaps between Client requirement and the available Product Scope for Fortune 500 Clients.</li> 
        
        <li>Conducted User Acceptance Testing (UAT) and Collaborated to
build successful client relationships.</li>


        </ul>
       

        
        </p></Col>
      
    </Row>
    <br/>
    {/* <Row className="ed-card">
    <Col md={2} >
        <Tilt>
          <img src={jhar} className="img-fluid" style={{padding:"10%"}} alt="avatar" />
        </Tilt>
      </Col>
      <Col md={8} >
        <h3 style={{ textAlign: "left"}}>Community Leader</h3>
        <h5 className="purple" style={{ textAlign: "left"}}>UnSchool</h5>
        <p style={{ fontSize: "0.89em", textAlign: "left",paddingBottom: "20px" ,color:"black"}}>Supervised and trained Community Influencers and Conducted
Customer Pitching Sessions Generated and confirmed Sales Leads across India and Ensured market penetration and expansion
      </p></Col>
      
    </Row> */}
    <br/>
    
    
  </Container>

  );
}

export default Experience;
