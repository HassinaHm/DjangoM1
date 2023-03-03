import React, { Component, Fragment } from 'react'
import TopNavbar from '../TopNavbar/TopNavbar' ;
import FixedPage from './FixedPage';
import Team from '../Team/Team' ;
import Footer from '../Footer/Footer';

export class TeamPage extends Component {
  render() {
    return (
        <Fragment>
        <TopNavbar />
        <FixedPage  />
        <Team />



        <Footer />
        </Fragment>
    )
  }
}

export default TeamPage