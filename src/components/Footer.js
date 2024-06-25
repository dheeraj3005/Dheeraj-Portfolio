import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import gitHub from '../assets/img/github1.svg';
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/dheerajlokesh/"><img src={navIcon1} alt="" /></a>
            <a href="https://www.instagram.com/dheerajgowda.l/?hl=en"><img src={navIcon3} alt="" /></a>
            <a href="https://github.com/dheeraj3005?tab=repositories"><img src={gitHub} alt="" /></a>
            </div>
            <p>Copyright {currentYear} All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
