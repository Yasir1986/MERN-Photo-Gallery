import React, { Component } from 'react';
import {Link } from 'react-router-dom';
//import Details from './components/Details';
import './style.css'
//import Api from './components/Api'


class Main extends Component {
 
  render() {

    console.log(this.props.students);

    return (

       <div className="container">


      {this.props.students.map((student, index) => (

        <div className="image-li">
       
        {student.firstName}{student.lastName}  
        <Link to={"/details/" + index}>
        {<img className="images"
      //  onerror="this.onerror=null" {src='/images/noimage.png';}}
        src={`/images/${student.src ? student.src : "/images/noimage.png" }`} 
        src={`/images/${student.firstName}.jpg`} 
        alt={student.firstname} />} 
      
        </Link> 
        </div>
      )

      )}

        <p className="footer">  Copyright 2018 @ Y@$IR. All rights reserved </p>
      </div>
    )
  } 
}

export default Main;


// src={`/images/${student.src ? student.src : "noimage.png" }`} 