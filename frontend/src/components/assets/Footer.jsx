import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <Navbar fixed="bottom" bg="dark" variant="dark">
                    <Container style={{justifyContent: 'center'}}>
                        <Navbar.Brand href="/">
                            <img src="./calculadora-icon.png" width="50rem" style={{paddingRight: '1rem'}}/>
                            Calculadora de CR
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            </>
        );
    }
}
 
export default Footer;