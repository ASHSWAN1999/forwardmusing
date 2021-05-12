import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import './MainContent.scss';


export const MainContent = () => (
    <div>
        <Container id="grey-block" fluid>
            <Row className="justify-content-md-center">


                <Col id="black-block" sm={11} md={5} lg={3}>
                    <h1>The best things I've seen men do to empower women</h1>
                    <a href="/post" className="white-link" title="The best things I've seen men do to empower women">
                        Read more
                    </a>
                </Col>


                <Col id="picture-block" sm={11} md={5} lg={3}>
                    <div >
                        <p id="text-container0">Environment</p>
                    </div>
                    <Container id="text-container1">
                        <h3>
                            How the "all-or-nothing" fallacy is thwarting environmental efforts
                        </h3>
                    </Container>
                    <a href="/post" className="blue-link" title="How the all or nothing fallacy is thwarting environmental efforts">
                        Read more
                    </a>
                </Col>


                <Col id="white-blocks" sm={11} md={10} lg={3}>
                    <Row className="white-block1">
                        <p className="category">Feminism</p>
                        <h3>
                            The connotations of "arts and crafts" when applied to the feminine
                        </h3>
                        <a href="/post" className="blue-link" title="The connotations of arts and crafts when applied to the feminine">
                            Read more
                        </a>
                    </Row>
                    <Row className="white-block2"> 
                        <p className="category">Feminism</p>
                        <h3>
                            My journey from eating exclusively meat to moderation 
                        </h3>
                        <a href="/post" className="blue-link" title="My journey from eating exclusively meat to moderation ">
                            Read more
                        </a>
                    </Row>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row id="banner-container" className="align-items-center justify-content-center">
                <Col sm={11} lg={5}>
                    <div className="mb-4">
                        <div id="get-involved-text">Get involved in activism</div>
                        <div id="be-the-change-text">Be the change you want to see</div>
                    </div>
                </Col>
                <Col className="text-start text-lg-center" sm={11} lg={5}>
                    <button className="btn btn-dark mr-2 mb-3">
                        Sign Petitions
                    </button>
                    <button className="btn btn-outline-dark ml-2 mb-3">
                        Submit Articles
                    </button>
                </Col>
            </Row>
        </Container>

        <Container id="grey-block" fluid>
                <Row className="justify-content-center">
                    <Col lg={3} id="jumbo-picture">
                    </Col>
                    <Col lg={7} id="jumbo-text">
                        <div className="text-light font-weight-bold small mt-2 mb-2">Environment</div>
                        <h1>
                            Blue sky ideas on how to reduce single use items
                        </h1>
                        <a href="/post" className="white-link mt-5 mb-2" title="Blue sky ideas on how to reduce single use items">
                            Read more
                        </a>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center mt-3">

                    <Col lg={10}>
                        <Row>
                            <Col className="white-cards p-5 mr-lg-3 ml-lg-0 m-3">
                                    <h3 className="text-secondary-dark">
                                        The myth of the “effortless” women and why it’s detrimental to girls
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                                    </p>
                                    <a href="/post" className="blue-link" title="The myth of the “effortless” women and why it’s detrimental to girls">
                                        Read more
                                    </a>
                            </Col>
                            <Col className="white-cards p-5 ml-lg-3 mr-lg-0 m-3">
                                    <h3 className="text-secondary-dark">
                                        An internal conflict between my love of fashion, and its environmental effects
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                                    </p>
                                    <a href="/post" className="blue-link" title="An internal conflict between my love of fashion, and its environmental effects">
                                        Read more
                                    </a>
                            </Col>
                        </Row>
                    </Col>

                </Row>

        </Container>

        
        
    </div>)

