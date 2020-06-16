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
	  	fields: {},
    	errors: {}
    }
  }

  handleRegisterValidation(){
	let fields = this.state.fields;
	let errors = {};
	let formIsValid = true;

	if(fields["name"].length < 0){
	   formIsValid = false;
	   errors["name"] = "Cannot be empty";
	}

	if(typeof fields["name"] !== "undefined"){
	   if(!fields["name"].match(/^[a-zA-Z]+$/)){
		  formIsValid = false;
		  errors["name"] = "Only letters";
	   }        
	}

	if(!fields["email"]){
	   formIsValid = false;
	   errors["email"] = "Please Enter your Email address";
	}

	if(typeof fields["email"] !== "undefined"){
	   let lastAtPos = fields["email"].lastIndexOf('@');
	   let lastDotPos = fields["email"].lastIndexOf('.');

	   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
		  formIsValid = false;
		  errors["email"] = "Email is not valid";
		}
   }  

   if(!fields["password"]){
	   formIsValid = false;
	   errors["password"] = "Please Enter your Password";
   }

   if(typeof fields["password"] !== "undefined"){
	   let passwordLength = fields["password"].length;
	   if(passwordLength < 8 || passwordLength > 32){
		   formIsValid = false;
		   errors["password"] = "Please Enter Correct Password";
	   }
   }

   if(!fields["confirmPassword"]){
		formIsValid = false;
		errors["confirmPassword"] = "Please confirm your Password";
   }

   if(typeof fields["confirmPassword"] !== "undefined"){
		let confirmPasswordLength = fields["confirmPassword"].length;
		if(confirmPasswordLength < 8 || confirmPasswordLength > 32){
			formIsValid = false;
			errors["confirmPassword"] = "Please Enter Correct Confirm Password";
		}

		if(fields["password"] !== fields["confirmPassword"]){
			errors["confirmPassword"] = "Password Does Not Match!";
		}
	}	

   this.setState({errors: errors});
   return formIsValid;
}

handleLoginValidation(){
	let fields = this.state.fields;
	let errors = {};
	let formIsValid = true;

	if(!fields["email"]){
		formIsValid = false;
		errors["loginEmail"] = "Please Enter your Email address";
	 }
 
	 if(typeof fields["email"] !== "undefined"){
		let lastAtPos = fields["email"].lastIndexOf('@');
		let lastDotPos = fields["email"].lastIndexOf('.');
 
		if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
		   formIsValid = false;
		   errors["loginEmail"] = "Email is not valid";
		 }
	}  
 
	if(!fields["password"]){
		formIsValid = false;
		errors["loginPassword"] = "Please Enter your Password";
	}
 
	if(typeof fields["password"] !== "undefined"){
		let passwordLength = fields["password"].length;
		if(passwordLength < 8 || passwordLength > 32){
			formIsValid = false;
			errors["loginPassword"] = "Please Enter Correct Password";
		}
	}
	this.setState({errors: errors});
	return formIsValid;
}

  loginSubmit(e){
	e.preventDefault();
	if(this.handleLoginValidation()){
		this.setState({loginClicked: true,
		registerClicked: false});
	}

}

registerSubmit(e){
	e.preventDefault();
	if(this.handleRegisterValidation()){
		this.setState({registerClicked: true,
		loginClicked:false});
	}

}

  handleChange(field, e){         
	let fields = this.state.fields;
	fields[field] = e.target.value;        
	this.setState({fields});
}

  render(){
    if(this.state.loginClicked){
      return <Redirect push to={"/"}/>;
	}
	if(this.state.registerClicked){
		return <Redirect push to={"/profile"}/>;
	}
    return (
		<div className="container">
			<div className="login-container">
			<form name="contactform" className="login-form" onSubmit= {this.loginSubmit.bind(this)}>
				<h1>Login</h1>
				<br/>
				<div className="form-group">
					<fieldset>
						<input className="form-control" ref="name" type="email" id="email" placeholder="Email Address" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
						<span style={{color: "red"}}>{this.state.errors["loginEmail"]}</span>
						<br/>
						<br/>
						<input className="form-control" type="password" size="32" id="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
						<span style={{color: "red"}}>{this.state.errors["loginPassword"]}</span>
						<br/>
						<br/>
						<Button variant="primary" type="submit" id="submit" value="submit">Login</Button>
						<br/>
						<br/>
						<label className="forgot-password"><Link to="/forgotpassword">Forgot Password?</Link></label>
					</fieldset>
				</div>
				</form>
			</div>

			<div className="register-container">    
				<form className="register-form" name="contactform" onSubmit= {this.registerSubmit.bind(this)}>
				<h1>Register</h1>
				<div className="form-group">
					<input className="form-control" type="text" id="name" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
					<span style={{color: "red"}}>{this.state.errors["name"]}</span>
					<br/>
					<br/>
					<input className="form-control" type="email" id="email" placeholder="Email Address" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
					<span style={{color: "red"}}>{this.state.errors["email"]}</span>
					<br/>
					<br/>
					<input className="form-control" type="password" id="password" placeholder="Password" onChange={this.handleChange.bind(this, "password")} value={this.state.fields["password"]}/>
					<span style={{color: "red"}}>{this.state.errors["password"]}</span>
					<br/>
					<br/>
					<input className="form-control" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange.bind(this, "confirmPassword")} value={this.state.fields["confirmPassword"]}/>
					<span style={{color: "red"}}>{this.state.errors["confirmPassword"]}</span>
					<br/>
					<br/>
					<input type="checkbox" id="terms" name="terms" value="terms"/>
					<label for="terms"> I agree to terms and conditions.</label>
					<span style={{color: "red"}}>{this.state.errors["terms"]}</span>
					<br/> 
					<br/>
					<Button variant="primary" type="submit" id="submit" value="submit" >Register</Button>
					<br/>
				</div>
				</form>
			</div>
		</div>
     );
  }
  
}

