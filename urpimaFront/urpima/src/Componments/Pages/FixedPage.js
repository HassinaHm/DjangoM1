import React, { Fragment } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import './About.css';


function FixedPage() {
  return (
   <Fragment>
    <Container fluid={true} className='Fixed'>
    <div className='PageOverly'>
    <Row>
        <Col className='title'></Col>
    </Row>
    </div>
    </Container>

   </Fragment>
  )
}

export default FixedPage