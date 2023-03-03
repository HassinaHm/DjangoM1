import React, { Component, Fragment } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import r1 from '../../asset/image/UPNG2.png'
import TopNavbar from '../TopNavbar/TopNavbar' ;
import Footer from '../Footer/Footer';
import './About.css';
import FixedPage from './FixedPage';

export class AboutPage extends Component {
  render() {
    return (
     
          <Fragment>
               <TopNavbar />
               <FixedPage  />
          <Container>

          <h1 className='axetitle  text-center '>ABOUT US</h1>
           <div className='bottom'></div>
         
          <Row>
          <Col lg={6} md={6} sm={12} ><img className='img' src={r1}   alt="" /></Col>
          <Col lg={6} md={6} sm={12} >
              <p>
                The "URPIMA" research unit is a research unit located 
                within the Department of Quantitative Methods and Computing in the premises of ISCAE. </p>
                <h5>SPECIFIC OBJECTIFS:</h5>
               <h5> The major objectives of URPIMA are:</h5>
               <h5>• Create an environment conducive to scientiﬁc research.</h5> 
               <h5>• Carry out research in the fields of economics and management in accordance with national priorities </h5>
               <h5>• Participate in the teaching and supervision of masters and co-supervision of theses </h5>
               <h5>• Improve the influence of the institute</h5>
             
          </Col>


          </Row>

          </Container>

          <Footer />
          </Fragment>
  
    )
  }
}

export default AboutPage