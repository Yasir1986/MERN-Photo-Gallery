import React, { Component } from 'react';
import './style.css';


class NewStudent extends Component {
  render() {
    return (
      <div>

        <h2>Add New Students</h2>

         <form
         ref="uploadForm"
         id="uploadForm"
         action="http://localhost:5000/addStudent"
         method="post"
         encType="multipart/form-data"
         >

<label>First Name</label>
<br />
<input name="firstName" text="FirstName" type="text" />
<br />
<label>Last Name</label>
<br />
<input name="lastName" text="LastName" type="text" />
<br />
<label>Title</label>
<br />
<input name="title" text="Title" type="text" /> 
<br />
<label>Nationality</label>
<br />
<input name="nationality" text="Nationality" type="text" />
<br />
<label>Skills</label>
<br />
<textarea name="skills" text="Skills" rows="10" cols="21">Write your Skills here:</textarea>
<br />
<label>Why SoftwareDeveloper</label>
<br />
<input name="whySofterDeveloper" text="WhySoftwareDeveloper" type="text" />
<br />
<label>LongTermVision</label>
<br />
<input name="longTermVision" text="LongTermVision" type="text" />
<br />
<label>MotivatesMe</label>
<br />
<input name="motivatesMe" text="MotivatesMe" type="text" />
<br />
<label>FavouiteQuote</label>
<br />
<input name="favoriteQuote" text="FavouiteQuote" type="text" />
<br />
<label>JoinedOn</label>
<br />
<input name="joinedOn" text="JoinedOn" type="text" />
<br />
<br />
<br />
<input type="file" name="sampleFile" />
<input type='submit' value='Upload!' />
</form>  

        
        <p class="footer">  Copyright 2018 @ Y@$IR. All rights reserved </p>
        
      </div>
    );
  }
}

export default NewStudent;