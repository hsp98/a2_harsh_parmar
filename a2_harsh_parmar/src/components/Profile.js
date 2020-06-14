import React from 'react';
import {Link} from "react-router-dom";

export default class Profile extends React.Component {
  render(){
    return (
      <div className="App">
      <div className="login-container">
        <form className="login-form">
          <h1>Login</h1>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email Address"/>
            <br/>
            <br/>
            <input type="password" id="password" placeholder="Password"/>
            <br/>
            <br/>
            <button type="submit" id="submit" value="submit">Login</button>
            <br/>
            <br/>
            <label className="forgot-password"><Link to="/forgotpassword">Forgot Password?</Link></label>
          </div>
        </form>
      </div>
      <div className="register-container">    
        <form className="register-form">
        <h1>Register</h1>
          <div className="form-group">
            <input type="text" id="name" placeholder="Name"/>
            <br/>
            <br/>
            <input type="email" id="email" placeholder="Email Address"/>
            <br/>
            <br/>
            <input type="password" id="password" placeholder="Password"/>
            <br/>
            <br/>
            <input type="password" id="confirmPassword" placeholder="Confirm Password"/>
            <br/>
            <br/>
            <input type="checkbox" id="terms" name="terms" value="terms"/>
            <label for="terms">I agree to terms and conditions.</label>
            <br/> 
            <br/>
            <button type="submit" id="submit" value="submit">Register</button>
          </div>
        </form>
      </div>
      </div>
     );
  }
  
}

