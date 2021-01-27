import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

function Social() {
  const socialGarbage = [
    { name: "twitter", icon: "fu", link: "meatspin.com" },
    { name: "linkedIn", icon: "fu", link: "meatspin.com" },
    { name: "github", icon: "fu", link: "meatspin.com" },
    { name: "facebook", icon: "fu", link: "meatspin.com" },
  ];
  return (
    <>
      {socialGarbage.map((network) => (
        <a href={network.link}>{network.icon}</a>
      ))}
    </>
  );
}
export default function App() {
  return (
    <Container>
      <Row className="section height-100 black">
        <Col className="my-auto text-center">
          <h1>I'm Yazzen S. EL-Safadi.</h1> I'm a Stockelsdorf based Jr
          Full-Stack Web App Engineer. .
          <Row className="text-center">
            <Col>
              <Social />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="section height-50 gray about-me ">
        <Col className="my-auto text-center" md={3}>
          image
        </Col>
        <Col className="my-auto" md={9}>
          About Me My name is Yazzen, I'm a Full Stack Engineer. Currently
          looking for an new opportunity. Contact Details Yazzen S. EL-Safadi
          Clever Landstrasse 27 Stockelsdorf Schleswog-Holstein, 23617 +49 175
          53 79 416 elsafadiyazzen@gmail.com
        </Col>
      </Row>
      <Row className="section white">
        <Col>
          <Row className="my-5">
            <Col md={3}>EDUCATION</Col>
            <Col md={9}>
              Penn State university - online Undergraduate, Software Engineering
              •On - Hold Studying online, however, it's put on-hold due to lack
              of financial support that I used to have after my fathers'
              passing.
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={3}>WORK</Col>
            <Col md={9}>
              Construction Worker @ Hansebau-Unsternehmen• 01/2020 - 012/2020
              Hard diligent labor, Team-oriented atitude and thinking,
              Instructed team members, Porblem solving E-commerce Back-Office
              Coordinator @ Salamon/Safadi GBR• 08/2017 - 01/2019 Translation &
              interpretation services, Vendors intercommunication, Inventory
              enumeration, Customer service Store Manager @ BS Sport• 05/2015 -
              05/2017 Coordinated logistics processes, Instructed team members,
              Customer services, Audited the business
            </Col>
          </Row>
          <Row className="my-5">
            <Col md={3}>SKILLS</Col>
            <Col md={9}>
              REACT.JS NODE.JS GIT/GITHUB JAVASCRIPT MONGODB EXPRESS.JS
              DATA/GOOGLE ANALYTICS
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="section gray">
        <Col>
          I WILL BE DEPLOYING SOME OF MY WORK SOON... Face recognition app
        </Col>
      </Row>{" "}
      <Row className="section mountain-image">
        <Col>CLIENT TESTIMONIALS and mountain</Col>
      </Row>
      <Row className="section dark-gray">
        <Col md={2}>GET IN TOUCH. Name * Email * Subject Message *</Col>
        <Col md={6}>GET IN TOUCH. Name * Email * Subject Message *</Col>
        <Col md={4}>GET IN TOUCH. Name * Email * Subject Message *</Col>
      </Row>
      <Row className="section height-25 black">
        <Col className="my-auto">
          <Row className="text-center">
            <Col>
              <Social />
            </Col>
          </Row>
          <Row className="text-center">
            <Col>©Design by Yazzen S. EL-Safadi</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
