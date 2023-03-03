import React, { Component ,Fragment} from 'react'
import { Container, Nav,Navbar} from 'react-bootstrap';
import  '../../asset/css/Bootstrap.min.css';
import '../TopNavbar/topnavbar.css'
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLarge } from '@fortawesome/free-solid-svg-icons'

export class TopNavbar extends Component {

  render() {
    return (
      <Fragment>

<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand  >URPIMA</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    
    <Nav>
      <Nav.Link ><NavLink className='navhover'  to="/">HOME</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className='navhover' to="/fields">FIELDS</NavLink></Nav.Link>
      <Nav.Link ><NavLink className='navhover' to="/projects">PROJECTS</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className='navhover' to="/Allpub">PUBLICATIONS</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className='navhover' to="/team">TEAM</NavLink></Nav.Link>
      <Nav.Link ><NavLink className='navhover' to='/about'>ABOUT US</NavLink></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  <NavLink className='navhover' to='/login'>
  <button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faUserLarge}  />  Login</button>
  </NavLink>
  </Container>
</Navbar>

  </Fragment>

    )
  }
}

export default TopNavbar