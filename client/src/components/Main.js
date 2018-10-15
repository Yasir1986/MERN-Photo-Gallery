import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import './style.css'

 class Main extends Component {
 
  render() {

    return (

       <div className="container">
     
      {this.props.students.map((student, index) => (

        <div className="image-li">
       
        {student.firstName}{student.lastName}  
        <Link to={"/details/" + index}>
        {<img className="images"
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

