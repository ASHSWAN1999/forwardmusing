import React from 'react';
import {Col, Row, Container, Image} from 'react-bootstrap';
import './Post.scss';
import headshot from '../Images/Headshot.png';
import { FaQuoteLeft } from 'react-icons/fa';


export const Post = () => (
    <Container fluid>
        <Row className="d-flex justify-content-center">
            <Col lg={2} md={2} sm={0}>
                
            </Col>
            <Col lg={6} md={8} sm={10} className="mb-1">
                <h1 className="text-secondary-dark pt-5 mt-5 mb-3 d-flex">The best things I’ve seen men do to empower women</h1>
                <Row>
                    <Col className="d-inline-flex">
                        
                            <Image src={ headshot } roundedCircle alt="photo of author" id="author-photo"/>
                                <div className="mx-3">
                                    <div id="name">Ashley Swanson</div>
                                    <div id="date">May 1, 2021</div>
                                </div>
                    </Col>
                    
                    <Col  className="d-inline-flex justify-content-end align-items-center">
                        <div id="time-tag">14 min read</div>
                    </Col>
                </Row>
            </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-5">
            <Col lg={2} md={2} sm={0} className="d-none d-md-block justify-content-end pr-5" >
                <a href="#section-1" className="menu-link">Subtitle 1</a>
                <a href="#section-2" className="menu-link">Another Subtitle</a>
                <a href="#section-3" className="menu-link">A very long Subtitle</a>
            </Col>
            <Col lg={6} md={8} sm={10} className="mb-5 pb-5">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>

                <h4 id="section-1">
                Subtitle 1
                </h4>

                <p>
                Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Enim diam vulputate ut pharetra sit amet. Elementum sagittis vitae et leo duis ut diam. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Bibendum enim facilisis gravida neque convallis. Lacinia at quis risus sed vulputate odio ut enim blandit. Purus ut faucibus pulvinar elementum integer. Tempus quam pellentesque nec nam aliquam sem et tortor.
                </p>

                <p>
                Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Lacus luctus accumsan tortor posuere ac ut. Amet nulla facilisi morbi tempus. 
                </p>

                <Row className="ml-4 mt-4 mb-3" >
                    <Col className="d-inline-flex">
                        <FaQuoteLeft title= "quotation mark" size="45px" color="grey"/>
                        <p className="px-3" id="quote">
                            Lectus mauris ultrices eros in cursus turpis massa tincidunt dui. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra. 
                        </p>
                    </Col>
                </Row>

                <p>
                Enim neque volutpat ac tincidunt vitae semper quis. Morbi tristique senectus et netus et malesuada. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Tincidunt augue interdum velit euismod in pellentesque. Viverra mauris in aliquam sem fringilla. Vulputate dignissim suspendisse in est. Massa massa ultricies mi quis hendrerit dolor magna eget est. At risus viverra adipiscing at in tellus. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Purus non enim praesent elementum facilisis.
                </p>

                <h4 id="section-2">
                Another Subtitle
                </h4>
                
                <p>
                Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Amet consectetur adipiscing elit duis. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. 
                </p>

                <p id="emphasis">
                Tortor posuere ac ut consequat. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a.
                </p>

                <p>
                Condimentum id venenatis a condimentum vitae sapien. Sed id semper risus in hendrerit gravida rutrum quisque non. In cursus turpis massa tincidunt dui. Dolor sed viverra ipsum nunc. Auctor urna nunc id cursus metus aliquam eleifend mi in.
                </p>

                <p>
                Vivamus arcu felis bibendum ut tristique et egestas. Turpis massa sed elementum tempus. Nunc faucibus a pellentesque sit amet porttitor. Congue quisque egestas diam in. Interdum velit euismod in pellentesque massa placerat. Nisl vel pretium lectus quam id. Urna neque viverra justo nec ultrices dui. Aenean vel elit scelerisque mauris pellentesque pulvinar. Mauris sit amet massa vitae tortor condimentum lacinia quis. In nulla posuere sollicitudin aliquam. Porttitor rhoncus dolor purus non enim praesent elementum facilisis. Nulla pharetra diam sit amet nisl suscipit adipiscing. Suspendisse potenti nullam ac tortor. Nunc mattis enim ut tellus elementum. Bibendum ut tristique et egestas quis ipsum. Elementum facilisis leo vel fringilla est.
                </p>

                <p>
                At augue eget arcu dictum varius duis at. Facilisi cras fermentum odio eu feugiat. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Amet venenatis urna cursus eget nunc scelerisque viverra. Gravida in fermentum et sollicitudin ac orci. Fermentum posuere urna nec tincidunt praesent semper feugiat. Dignissim enim sit amet venenatis urna cursus eget nunc. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet. 
                </p>

                <h4 id="section-3">
                A very long subtitle
                </h4>

                <p>
                Neque laoreet suspendisse interdum consectetur libero id faucibus. Velit scelerisque in dictum non consectetur a erat nam at. Tincidunt praesent semper feugiat nibh sed. Scelerisque purus semper eget duis at tellus at urna condimentum. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Eros in cursus turpis massa tincidunt dui. Enim sit amet venenatis urna cursus.
                </p>
            
            </Col>
        </Row>
    </Container>
)