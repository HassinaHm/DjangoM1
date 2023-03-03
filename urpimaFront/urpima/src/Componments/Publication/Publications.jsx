import React ,{ Fragment}from 'react'
import {NavLink} from 'react-router-dom';
import  '../../asset/css/Bootstrap.min.css';
import './publication.css';
import { useEffect, useState } from 'react';
import http from '../http';

function Publications() {
  const [publications , setpublications]=useState([]);
 // const [Auteur , setAuteur]=useState(false);
  //to={{ pathname:"/pubD/"+pub.id}}

   useEffect(()=>{
     fetchAll();
     },[]);
     
    const fetchAll =()=>{
      http.get('').then(res=>{ 
        setpublications(res.data);
    });
  }
   
   
  return (
<Fragment>

        <div class="card">
         
           {publications.map((pub)=>(
              <div key={pub.id}
              id={pub.id}>
              <p><b>Title: </b><h4>{pub.titre}</h4></p>
              <div><p><b>Authors: </b>{pub.auteur},<b>Date</b>{pub.date_pub}</p></div>
              <div><p><b>Url:</b>{pub.url},<b>Doi:</b>{pub.doi},<b>Pages:</b>{pub.nb_page},<b>Volume:</b>{pub.volume} </p>
              </div>
            <NavLink className='navhover' to="/pubD" ><button class="btn btn-secondary" type="button"> Abstract</button></NavLink>
              </div>

              ))
            }
      

         </div>

     
 
</Fragment>

  )
}

export default Publications