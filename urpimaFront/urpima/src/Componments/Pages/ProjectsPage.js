import React, { Component, Fragment } from 'react'
import TopNavbar from '../TopNavbar/TopNavbar' ;
import Projects from '../Projects/Projects' ;
import Footer from '../Footer/Footer';
import FixedPage from './FixedPage';


export class ProjectsPage extends Component {
  render() {
    return (
      <Fragment>
      <TopNavbar />
      <FixedPage  />
      <Projects />

       
      <Footer />
      </Fragment>
    )
  }
}

export default ProjectsPage