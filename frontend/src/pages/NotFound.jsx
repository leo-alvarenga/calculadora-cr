import React, { Component } from 'react';
import { Button, Col, Container, Jumbotron, Row } from 'react-bootstrap';

import NavBar from '../components/assets/NavBar';
import Footer from '../components/assets/Footer';

class NotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <NavBar/>
                <div className='page-component'>
                    <Container>
                        <Row>
                            <Col md={2}>
                            </Col>

                            <Col md={8}>
                                <Jumbotron>
                                    <h1>Página não encontrada!</h1>
                                    <p>
                                        A página procurada não existe.
                                    </p>

                                    <code>Erro 404</code>

                                    <br />
                                    <hr />
                                    <br />

                                    <Button variant='secondary' href='/'>Voltar ao início</Button>
                                </Jumbotron>
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
 
export default NotFound;