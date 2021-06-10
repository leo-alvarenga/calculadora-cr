import { Nav, Navbar } from 'react-bootstrap';
import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            showSobre: false
        }
    }

    setShowSobre = (value) => {
        this.setState({showSobre: value});
    };

    mostraDicaSobre = () => {
        this.setShowSobre(true);
    };

    escondeDicaSobre = () => {
        this.setShowSobre(true);
    };

    render() { 
        return ( 
            <>
                <Navbar fixed="top" bg='dark' variant='dark' expand='lg'>
                    <Navbar.Brand href='/'>
                        <img src='./calculadora-icon.png' width="50rem" style={{paddingRight: '1rem'}} />
                        Calculadora de CR
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls='basic-navbar-nav' />

                    <Navbar.Collapse>
                        <Nav className='ml-auto'>
                            <Nav.Link href='/'>
                                Início
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        );
    }
}
 
export default NavBar;