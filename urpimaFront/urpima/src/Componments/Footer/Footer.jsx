import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Container,Col ,Row } from 'react-bootstrap'
import '../Footer/Footer.css'

import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'



export class Footer extends Component {
  render() {
    return (
      <Fragment>
          
        <Container fluid={true} className="footer">
        <Row>

       <Col lg={4} md={6} sm={12} >
       <h4 className='footerName'> Follow US</h4>

       <a className='social' href="#"><FontAwesomeIcon icon={faFacebookF} size="2x" /></a>
       <a className='social' href="#"><FontAwesomeIcon icon={faTwitter}  size="2x" /></a>
       <a className='social' href="#"><FontAwesomeIcon icon={faGithub}  size="2x" /></a>
       <a className='social' href="#ll"><FontAwesomeIcon icon={faLinkedin}  size="2x" /></a>
      
       </Col>

       <Col lg={4} md={6} sm={12}>
       <h4 className='footerName'> Adresses </h4>
        <p className='footerD'>CONTACT-US</p>
        <p className='footerD'> BP: 6093 – Nouakchott – Mauritanie</p>
        <p className='footerD'><FontAwesomeIcon icon={faPhone} />  +222 45 24 19 66</p>
       </Col>

       <Col lg={4} md={6} sm={12}>
       <h4 className='footerName'> Informations </h4>
        <p className='footerD'> The "URPIMA" research unit is a research unit 
          located within the Department of Quantitative Methods and Computing 
          in the premises of ISCAE. </p>
       </Col>


        </Row>
        </Container>
       

      </Fragment>
    )
  }
}

export default Footer