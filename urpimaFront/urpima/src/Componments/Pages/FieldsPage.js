import React, { Component, Fragment } from 'react'
import TopNavbar from '../TopNavbar/TopNavbar' ;
import Axes from '../Axe/Axes';
import Footer from '../Footer/Footer';
import FixedPage from './FixedPage';

export class FieldsPage extends Component {
  render() {
    return (
      <Fragment>
      <TopNavbar />
      <FixedPage  />
      <Axes />


      <Footer />
      </Fragment>
    )
  }
}

export default FieldsPage