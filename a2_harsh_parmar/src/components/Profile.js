import React from 'react';
import {Link, Redirect} from "react-router-dom";
import {Button} from "react-bootstrap";
import './profile.css';

export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loginClicked: false,
      registerClicked: false,
    }
  }

  loginButtonClicked = () => {this.setState({loginClicked: true});}

  registerButtonClicked = () => {this.setState({registerClicked:true});}

  render(){
    if(this.state.loginClicked){
      return <Redirect push to={"/"}/>;
    }
    return (
		<div className="container">
			<div className="login-container">
				<form className="login-form">
				<h1>Login</h1>
				<br/>
				<div className="form-group">
					<input className="form-control" type="email" id="email" placeholder="Email Address"/>
					<br/>
					<br/>
					<input className="form-control" type="password" id="password" placeholder="Password"/>
					<br/>
					<br/>
					<Button variant="primary" type="submit" id="submit" value="submit" onClick={this.loginButtonClicked}>Login</Button>
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
					<input className="form-control" type="text" id="name" placeholder="Name"/>
					<br/>
					<br/>
					<input className="form-control" type="email" id="email" placeholder="Email Address"/>
					<br/>
					<br/>
					<input className="form-control" type="password" id="password" placeholder="Password"/>
					<br/>
					<br/>
					<input className="form-control" type="password" id="confirmPassword" placeholder="Confirm Password"/>
					<br/>
					<br/>
					<input type="checkbox" id="terms" name="terms" value="terms"/>
					<label for="terms"> I agree to terms and conditions.</label>
					<br/> 
					<br/>
					<Button variant="primary" type="submit" id="submit" value="submit" onClick={this.registerButtonClicked}>Register</Button>
					<br/>
				</div>
				</form>
			</div>
		</div>
     );
  }
  
}

