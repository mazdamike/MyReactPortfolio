import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import petMePic from "./images/petMePic300.png";
import notetakerPic from "./images/notetakerPic.png";
import bcCR from "./images/bcCR300.png";
import pWordGen from "./images/pWordGen.png";
import weatherApp from "./images/weatherApp.png";
import dayPlanner from "./images/dayPlanner.png";
import "./style.css"; 

function Projects() {
    return (
        <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-4">
            
            <div className="card cardStyle" style={{width: 300}}>
            <img src={petMePic} className="card-img-top" alt="Screenshot of PetMe application" width="300" />
            <div className="card-body">
                <h5 className="card-title">PetMe</h5>
                <p className="card-text">An application for listing, searching for, and adopting pets.</p>
                <a href="https://limitless-inlet-32977.herokuapp.com/" target="_blank"
                    className="btn btn-secondary">Launch</a>
                <a href="https://github.com/Miteshmodi003/PetMe" target="_blank" style={{marginLeft: 10}}>Go to
                    GitHub</a>
            </div>
            </div>
            </Col>
            <Col size="md-4">

            <div className="card cardStyle" style={{width: 300}}>
            <img src={notetakerPic} className="card-img-top" alt="Screenshot of Note Taker Application" width="300" />
            <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">An application that can be used to write, save, and delete notes.</p>
                <a href="https://dry-anchorage-78087.herokuapp.com/" target="_blank"
                    className="btn btn-secondary">Launch</a>
                <a href="https://github.com/mazdamike/Note-Taker" target="_blank" style={{marginLeft: 10}}>Go to
                    GitHub</a>
            </div>
            </div>
            </Col>
            <Col size="md-4">
            <div className="card cardStyle" style={{width: 300}}>
            <img src={bcCR} className="card-img-top" alt="Screenshot of CryptoCurrency Exchange" width="300" />
            <div className="card-body">
                <h5 className="card-title">Cryptocurrency Exchange</h5>
                <p className="card-text">Displays the value of CryptoCurrencies.</p>
                <a href="https://mazdamike.github.io/Cryptocurrency-Exchange-and-News-Tracker/" target="_blank"
                    className="btn btn-secondary">Launch</a>
                <a href="https://github.com/mazdamike/Cryptocurrency-Exchange-and-News-Tracker" target="_blank" style={{marginLeft: 10}}>Go to
                    GitHub</a>
            </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
            <div className="card cardStyle" style={{width: 300}}>
            <img src={pWordGen} className="card-img-top" alt="Screenshot of Password Generator" width="300" />
            <div className="card-body">
                <h5 className="card-title">Password Generator</h5>
                <p className="card-text">Randomly generates and displays a password</p>
                <a href="https://mazdamike.github.io/week3PasswordGenerator/" target="_blank"
                    className="btn btn-secondary">Launch</a>
                <a href="https://github.com/mazdamike/week3PasswordGenerator" target="_blank" style={{marginLeft: 10}}>Go to
                    GitHub</a>
            </div>
            </div>
            </Col>
            <Col size="md-4">
            <div className="card cardStyle" style={{width: 300}}>
            <img src={weatherApp} className="card-img-top" alt="Screenshot of a weather app showing weather for various cities" width="300" />
            <div className="card-body">
                <h5 className="card-title">Weather Dashboard</h5>
                <p className="card-text">Retrieves the weather for cities entered by the user</p>
                <a href="https://mazdamike.github.io/week6WeatherDashboard/" target="_blank"
                    className="btn btn-secondary">Launch</a>
                <a href="https://github.com/mazdamike/week6WeatherDashboard" target="_blank" style={{marginLeft: 10}}>Go to
                    GitHub</a>
            </div>
            </div>
            </Col>
            <Col size="md-4">
            <div className="card cardStyle" style={{width: 300}}>
            <img src={dayPlanner} className="card-img-top" alt="Screenshot of a day planner" width="300" />
            <div className="card-body">
                <h5 className="card-title">Day Planner</h5>
                <p className="card-text">Allows the user to enter appointments into the planner.</p>
                <a href="https://mazdamike.github.io/week5DayPlanner/" target="_blank"
                    className="btn btn-secondary">Launch</a>
                <a href="https://github.com/mazdamike/week5DayPlanner" target="_blank" style={{marginLeft: 10}}>Go to
                    GitHub</a>
            </div>
            </div>
            
            </Col>
          </Row>
          
        </Container>
      </div>
    );
  }
  
  export default Projects;