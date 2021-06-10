import React, { Component } from 'react';
import { Navbar, Container, OverlayTrigger, Popover } from 'react-bootstrap';

class Footer extends Component {
    state = { 
        popoverAuthor: <Popover id="popover-basic">
                            <Popover.Title as="h3">
                                Criado por <a target='blank' href='https://github.com/leo-alvarenga'>Leonardo A. Alvarenga</a>
                            </Popover.Title>

                            <Popover.Content>
                                Copyright (c) MIT Liscense
                            </Popover.Content>
                        </Popover>
    }

    render() { 
        return ( 
            <>
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <Container style={{justifyContent: 'center'}}>

                        <OverlayTrigger
                            placement='top'    
                            trigger='click'
                            key='creator'
                            overlay={this.state.popoverAuthor}
                        >
                            <Navbar.Brand>
                                <div>
                                    <img src="./calculadora-icon.png" width="50rem" style={{paddingRight: '1rem'}} alt='calculadora-img' />
                                    Calculadora de CR
                                </div>
                            </Navbar.Brand>
                        </OverlayTrigger>
                        
                    </Container>
                </Navbar>
            </>
        );
    }
}
 
export default Footer;