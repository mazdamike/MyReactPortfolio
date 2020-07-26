import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
    return (
        <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
            <h1>Contact</h1>
            <p>updated July 25 2020</p>
            <h2><i class="fas fa-envelope-square">&nbsp;</i><a href="mailto:mwpowell44@gmail.com" target="_blank">Email</a> mwpowell44@gmail.com</h2>
            <h2><i class="fas fa-mobile-alt">&nbsp;</i>Phone (404) 543-7338</h2>
            <h2><i class="fab fa-linkedin">&nbsp;</i><a href="https://linkedin.com/in/mwpowell44" target="_blank">LinkedIn</a></h2>
            <h2><i class="fab fa-github-square">&nbsp;</i><a href="https://github.com/mazdamike" target="_blank">GitHub</a></h2>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
  
  export default Contact;