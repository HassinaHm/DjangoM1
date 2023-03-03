import React, { Component ,Fragment } from 'react'
import {Container, Row, Col,Spinner} from 'react-bootstrap'
import '../Projects/projet.css'
import axios from 'axios';


export default class Projects extends Component {
  constructor(props){
    super(props)
    this.state ={
      projet: '',
      isLoaded:false,
      projects: []
    };
  }
  
 componentDidMount(){
   this.getprojects();
 }

 getprojects =()=>{
  axios.get('http://127.0.0.1:8000/urpima/projets/').then(res=>
  {
    if(res.data){
      this.setState({
        projects: res.data,
        isLoaded: true
      });
    }
  })

 }

  
  
  render(){
    const {error, isLoaded}=this.state;
    if(error){
      return <div>Error </div>;
    }else  if(!isLoaded){
      return <div>Loading<Spinner animation="border" variant="info" /> </div>;
    }else{
      return(
        <Fragment>
        <Container>
        <h1 className='axetitle  text-center '>Our Projects</h1>
        <div className='bottom'></div>
       
        {
         this.state.projects.map((projet)=>(
          <div>
            <Row>
            <Col>
             <h4 className='axename'>Titre : {projet.titre} </h4>
             <p className='axedescription'>Description: {projet.resume}  </p>
             <p className='axedescription'>Field: {projet.ojectifs}  </p>
            </Col>
            </Row>
          </div>
          ))
          }


       
       </Container>
      </Fragment>
        );
      
        }  
 }
}

