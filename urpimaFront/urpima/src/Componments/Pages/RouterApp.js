import React, { Component ,Fragment} from 'react'
import FieldsPage from './FieldsPage';
import Homepage from './Homepage';
import ProjectsPage from './ProjectsPage';
import PublicationsPage from './PublicationPage';
import TeamPage from './TeamPage';
import AboutPage from './AboutPage';
import Login from './Login'
import Register from './Register'
import Allpublications from './Allpublications';
import JournalView from './JournalView';
import { Routes, Route} from "react-router-dom";

export class RouterApp extends Component {
  render() {
    return (
        <Fragment>
         
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/fields" element={<FieldsPage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/publications" element={<PublicationsPage />}></Route>
            <Route path="/Allpub" element={<Allpublications />} />
            <Route path="/journals/:id" element={<JournalView />} />
            <Route path="/team" element={<TeamPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
          
      </Fragment>
    )
  }
}

export default RouterApp;
