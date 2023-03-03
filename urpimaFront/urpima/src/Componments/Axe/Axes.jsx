import React, { Component,Fragment } from 'react';
import { Container,Row,Col,Spinner } from 'react-bootstrap';
import '../../asset/css/Bootstrap.min.css';
import '../Axe/axe.css';
import axios from 'axios';
//import {useState, useEffect} from 'react';


export class Axes extends Component {
  constructor(props){
    super(props)
    this.state ={
      axe: '',
      isLoaded: false,
      axes: []
    };
  }
  
  
  componentDidMount(){
    this.getaxes();
  }

 getaxes =()=>{
  axios.get('http://127.0.0.1:8000/urpima/axes/').then(res=>
  {
    if(res.data){
      this.setState({
        axes: res.data,
        isLoaded: true
      });
    }
  });

 }
  render() {
    const {error, isLoaded}=this.state;
    if(error){
      return <div>Error </div>;
    }else  if(!isLoaded){
      return <div>Loading<Spinner animation="border" variant="info" /> </div>;
    }else{
    return (
      <Fragment>
          <h1 className='axetitle text-center'>Scientific fields</h1>
        <div className='bottom'></div>

      <Container>
      <Row>

       { 
         this.state.axes.map((axe)=>(
          <Col >
          <div key={axe.id}>
          <div className='card text-center'>
           <img  className="AxeIcon" src={`http://127.0.0.1:8000/urpima${axe.image}`}  alt=''  />
           <h4 className='axename'>{axe.name} </h4>
           <p className='axedescription'>Responsable: {axe.responsable}</p>
          </div>
          </div>
          </Col>
         ))
        }
          

      </Row>
      </Container>

      </Fragment>

    )
     }
  }
}

export default Axes