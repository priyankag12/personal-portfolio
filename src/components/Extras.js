import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import extraImg1 from "../assets/img/extarImg1.png";
import extraImg2 from "../assets/img/extraImg2.png";
import extraImg3 from "../assets/img/extraImg3.png";

export const Extras = () => {

  const achievements = [
    {
      title: "Participation in Hackathons",
      description: "Actively participated in multiple hackathons such as MegaHack4.0 and Codement2.0, developing innovative solutions under time constraints and collaborating with teams to solve real-world challenges.",
      imgUrl: extraImg3,
    },
    {
      title: "Research Paper Publication",
      description: "Published a paper on Enhancing Parking Efficiency and Mobility with IR-based Smart Parking Management, contributing to the field and showcasing expertise in Computer Sceince and Engineering.",
      imgUrl: extraImg2,
    },
    {
      title: "Chairperson, ACM Student Chapter",
      description: "Led the ACM Student Chapter, organized events, workshops, and sessions to foster a community of learners and enhance technical skills among members.",
      imgUrl: extraImg1,
    },
  ];

  return (
    <section className="achievement" id="achievements">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Extracurricular Activities & Achievements</h2>
                  <p>Beyond academics, these achievements showcase leadership, innovation, and a commitment to continuous learning. Participation in hackathons, research contributions, and leadership roles emphasize my dedication to growth and collaboration in diverse fields.</p>
                  <Tab.Container id="achievements-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            achievements.map((achievement, index) => {
                              return (
                                <Col key={index} sm={6} md={4}>
                                  <div className="achievement-card position-relative">
                                    <div className="image-container">
                                      <img
                                        src={achievement.imgUrl}
                                        alt={achievement.title}
                                        className={isVisible ? "animate__animated animate__fadeIn" : ""}
                                      />
                                      <div className="overlay"></div>
                                    </div>
                                    <div className={isVisible ? "description animate__animated animate__slideInUp" : "description"}>
                                      <h5>{achievement.title}</h5>
                                      <p>{achievement.description}</p>
                                    </div>
                                  </div>
                                </Col>
                              )
                            })
                          }
                        </Row>
                        <p>
                          Apart from these, I have contributed in conducting events in various Clubs such as CyberSec & Blockchain Club (CBC), Developers Student Club (DSC). Actively participated in the Management Team of our TechFest, SymbiTech.
                          I have also been a part of one of the final teams in the <strong>E-Summit'24 held in IIT-Bombay</strong>.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
