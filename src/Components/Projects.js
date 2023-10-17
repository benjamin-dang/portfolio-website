import { Container, Row, Col, Tab, Nav, } from "react-bootstrap"
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'


import ProjectCard from './ProjectCard'

export default function Projects() {
    const projects =
        [{
            title: "Business Startup",
            desciption: "Design & Development",
            imgUrl: projImg1,
        }, {
            title: "Business Startup",
            desciption: "Design & Development",
            imgUrl: projImg2,
        }, {
            title: "Business Startup",
            desciption: "Design & Development",
            imgUrl: projImg3,
        }, {
            title: "Business Startup",
            desciption: "Design & Development",
            imgUrl: projImg1,
        }, {
            title: "Business Startup",
            desciption: "Design & Development",
            imgUrl: projImg2,
        }, {
            title: "Business Startup",
            describe: "Designe & Development",
            imgUrl: projImg3
        }]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is siply dummy text of the printig and typesetting industry. Lorem Ipsum is siply dummy text of the printig and typesetting industry.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pils mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab two 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((projects, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...projects} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="section">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum 2</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}