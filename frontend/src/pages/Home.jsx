import React, { Component } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import CalculoCR from '../components/CalculoCR';
import CalculoCRA from '../components/CalculoCRA';
import GuiaUso from '../components/GuiaUso';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <NavBar />

                <div className="page-component" >
                    <Container>
                        <Row>

                            <Col md={2} style={{alignText: 'start'}}>
                                <GuiaUso />
                            </Col>

                            <Col md={8} style={{padding: '1rem'}} className="border">

                                <Tabs defaultActiveKey="cr" id="uncontrolled-tab-example">
                                    <Tab eventKey="cr" title="Coeficiente de Rendimento (CR)">
                                        <CalculoCR />
                                    </Tab>
                                    <Tab eventKey="cra" title="Coeficiente de Rendimento Acumulado (CRA)">
                                        <CalculoCRA />
                                    </Tab>
                                </Tabs>

                            </Col>

                            <Col md={2}>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <Footer />
            </>
        );
    }
}
 
export default Home;