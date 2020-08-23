import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import meAtGC from "./images/meAtGCnb.jpg";
import "./style.css";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Michael W. Powell</h1>
        <h2>Portfolio</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p><img id="grandCanyon" src={meAtGC} />
              Hello and thanks for checking out my portfolio. 
            </p>
            <p>
            I'm a Website Content Specialist / Developer and U.S. Navy veteran with extensive corporate, small business, and military management experience and education in web design and digital content development. I have earned a certificate in Full Stack Web Development from Georgia Tech Professional Education and an Associate Degree in Web Design from Gwinnett Technical College. With an eye for detail I'm an accomplished teammate skilled in web technologies including HTML, CSS, JavaScript, and Node.js, and also proficient in Adobe Creative Suite. My strong work ethic and commitment to personal and professional integrity make me the trusted choice for any job.
            </p>
            <p>
              In my off time you may find me reading a book, taking a long walk or hike, playing classical guitar, or cooking up a storm in the kitchen. I currently reside in Peachtree Corners, Georgia.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
