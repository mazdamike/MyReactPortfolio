import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import "./style.css";

function Resume() {
    return (
        <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
            <h1>Resume</h1>
            <p>updated July 25 2020</p>
            <h2><i class="far fa-file-pdf">&nbsp;</i><a href="https://drive.google.com/file/d/1X_N5xYbgpiNsrwyncAniUk-_bfDfUcgW/view?usp=sharing"
            target="_blank">Michael W. Powell</a></h2>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
  
  export default Resume;