import React, { Component, Fragment } from 'react'
import TopNavbar from '../TopNavbar/TopNavbar' ;
import FixedPage from './FixedPage';
import Publications from '../Publication/Publications';
import Footer from '../Footer/Footer';

export class PublicationPage extends Component {
  render() {
    return (
        <Fragment>
        <TopNavbar />
        <FixedPage  />
        <Publications />
  

        <Footer />
        </Fragment>
    )
  }
}

export default PublicationPage