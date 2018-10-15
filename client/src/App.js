import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewStudent from './components/NewStudent';
import Details from './components/Details';
 

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/Api")
      .then(res => res.json())
      .then(students => this.setState({students}) );
    }


  render() {
    return (
     <Router> 
     <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Integrify Students Photo Gallery Application</h1>
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>


     <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
         <li>
          <a href ="http://localhost:5000/Api">Api</a>
        </li> 
        <li>
          <Link to="/addStudent">Add New Student</Link>
        </li>
      </ul>
             <Route exact path ="/" 
                  render={() => {
                    return(
                      <Main students={this.state.students} />
                  );
               }} />

                <Route exact path ="/addStudent"
                  render={() => {
                    return(
                      <NewStudent />
                    );
                   }} />
         
                   <Route exact path ="/Details/:student" render = {props => <Details students={this.state.students} {...props}/>}
                      /> 
      </div>
      </Router>

    );
  }
}

export default App;
