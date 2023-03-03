import React, { Component, Fragment } from 'react'
import TopBanner from '../TopBanner/TopBanner';
import Axes from '../Axe/Axes';
import Team from '../Team/Team' ;
import Projects from '../Projects/Projects' ;
import TopNavbar from '../TopNavbar/TopNavbar' ;
import Footer from '../Footer/Footer';
import Publications from '../Publication/Publications';


export class Homepage extends Component {
  render() {
    return (
      <div>
      <Fragment>
        <TopNavbar />
        <TopBanner />
        <Axes />
        <Projects />
        <Publications />
        <Team />
        <Footer />
    </Fragment>
    </div>
    )
  }
}

export default Homepage