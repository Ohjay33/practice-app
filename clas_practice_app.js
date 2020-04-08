import React, { Component } from 'react';
export default class SignUp extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div>
             <div id='signinContainer'>
                  <form id='form'>       
                      <input className='input' type="text"   
                       placeholder="First Name"/>
                      <input className='input' type="text"  
                       placeholder="Last Name"/>          
                      <input className='input' type="text"  
                       placeholder="Email"/>          
                      <input className='input' type="password" 
                       placeholder="Password"/>
                      <button id='submit'>Sign Up</button>
                  </form>
             </div>
        </div>
      )
   }
}

class App extends Component {
    render() {
      return (
        <BrowserRouter>
      
 {BrowserRouter, Route} from 'react-router-dom';
          <div>
            <Route exact={true} path='/' render={() => (
              <div className="App">
                <Home />
              </div>
            )}/>
            <Route exact={true} path='/signin' render={() => (
              <div className="App">
                <SignIn />
              </div>
            )}/>
            <Route exact={true} path='/signup' render={() => (
              <div className="App">
                <SignUp />
              </div>
            )}/>
          </div>
        </BrowserRouter>
      );
    }
  }
import Dashboard from './Views/Dashboard';
import Groups from './Views/Groups';
import History from './Views/History';
import Home from './Views/Home';
import {BrowserRouter, Route} from 'react-router-dom';