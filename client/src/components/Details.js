import React, { Component } from 'react';
import './style.css'


class Details extends Component {
  render() {
   const student = this.props.students[this.props.match.params.student]

 // console.log(this.props.match.params.student)

    return (

      <div>
          
          <h2>Details</h2>

      {<img className="images"
      src={`/images/${student.src ? student.src : "noimage.png" }`} 
      src={`/images/${student.firstName}.jpg`} 
      alt={student.firstname} />} 
      <p>First Name:{student.firstName}</p>
      <p>Last Name: {student.lastName} </p>
      <p>Title: {student.title} </p>
      <p>Nationality: {student.nationality} </p>
      <p>Why Softwarre Developer: {student.whySofterDeveloper} </p> 
      <p>Long Term Vision: {student.longTermVision} </p> 
      <p>Motivates Me: {student.motivatesMe} </p>
      <p>Favorite Quote: {student.favoriteQuote} </p>   
      <p>Joined On: {student.joinedOn} </p> 
        
        <p className="footer">  Copyright 2018 @ Y@$IR. All rights reserved </p>
        

      </div>
    );
  }
}


export default Details;





// Another way for displaying the data, if const is not defined
/* 
      <p>Why Softwarre Developer: {this.props.students[this.props.match.params.student].whySofterDeveloper} </p> 
      <p>Long Term Vision: {this.props.students[this.props.match.params.student].longTermVision} </p> 
      <p>Motivates Me: {this.props.students[this.props.match.params.student].motivatesMe} </p>
      <p>Favorite Quote: {this.props.students[this.props.match.params.student].favoriteQuote} </p>   
      <p>Joined On: {this.props.students[this.props.match.params.student].joinedOn} </p>  */