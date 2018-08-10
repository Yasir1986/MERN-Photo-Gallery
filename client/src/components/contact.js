import React, { Component } from 'react';
import './style.css';

class Contact extends Component {
  render() {
    return (
     
        <div>

            <h1>Contact Page</h1>


<form method="POST">

<label>Your First Name</label>
<br/>
<input id="firstName" name="firstName" text="FirstName" type="text" />
<br/>
<label>Your Last Name</label>
<br/>
<input id = "lastName" name="lastName" text="LastName" type="text" />
<br/>
<label>Your Email address</label>
<br/>
<input name="Email" text="Email" type="text" />
<br/>
<label>Your Message</label>
<br/>
<input name="Message" text="Message" type="text" />
<br/>
<input type="submit"/>
<br/>
    </form>

    <p className="footer">  Copyright 2018 @ Y@$IR. All rights reserved </p>

 
      </div>
    );
  }
}

export default Contact;
















            
