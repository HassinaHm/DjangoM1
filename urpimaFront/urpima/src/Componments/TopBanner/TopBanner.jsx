import React, { Component, Fragment } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import '../../asset/css/Bootstrap.min.css';
import '../TopBanner/custom.css'


export class TopBanner extends Component {
  render() {
    return (
      <Fragment>

      <Container className="topFixedBanner text-center">
      <div className="topBannerOverly ">


      <Container className="topContent">
      <Row>
      <Col>
      <h1 className='toptitle'>URPIMA</h1>
      <h2 className='subtitle'><b> Create a Favorable Environment</b> </h2>
        <h2 className='subtitle'><b>for Scientific Research</b></h2>
      </Col>
      </Row>

      </Container>


      </div>

      </Container>


      </Fragment>
    )
  }
}

export default TopBanner