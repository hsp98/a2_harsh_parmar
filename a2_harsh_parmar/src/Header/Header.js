import React from 'react';
import {Link} from "react-router-dom";
import "./Header.css";
import logo from "./logo.png";
import userLogo from "./userlogo.png"

export default class Header extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.isUserLoggedIn)
    if(this.props.isUserLoggedIn === "true"){
      return (
        <div >
        <div className="flex-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title">MovieTime</h1>
            <div className="profile">
              <img src={userLogo} alt="userlogo" className="userlogo"/>
              <label class="profile-text"><Link to="/profile">Profile</Link></label>
            </div>
        </div>
            <ul className="ul">
                <li className="menu-link"><Link to="/">Home</Link></li>
                <li className="menu-link"><Link to="/bookings">Bookings</Link></li>
                <li className="menu-link"><Link to="/offers">Offers</Link></li>
                <li className="menu-link"><Link to="/aboutus">About Us</Link></li>
                <li className="menu-link"><Link to="/contactus">Contact Us</Link></li>
                <li className="search-bar">
                  <div className="col-sm-10">
                    <input className="form-control" type="text" id="searchMovie" placeholder="Search Movie" onChange={() => this.handleSearchMovie()}/>
                  </div>
                </li>
            </ul>
        </div>
       );
    }
    else{
      return (
        <div >
        <div className="flex-container">
            <img src={logo} alt="logo" className="logo"/>
            <h1 className="title">MovieTime</h1>
            <div className="profile">
              <img src={userLogo} alt="userlogo" className="userlogo"/>
              <label class="profile-text"><Link to="/profile">Profile</Link></label>
            </div>
        </div>
            <ul className="ul">
                <li className="menu-link"><Link to="/">Home</Link></li>
                {/* <li className="menu-link"><Link to="/bookings">Bookings</Link></li> */}
                <li className="menu-link"><Link to="/offers">Offers</Link></li>
                <li className="menu-link"><Link to="/aboutus">About Us</Link></li>
                <li className="menu-link"><Link to="/contactus">Contact Us</Link></li>
                <li className="search-bar">
                  <div className="col-sm-10">
                    <input className="form-control" type="text" id="searchMovie" placeholder="Search Movie" onChange={() => this.handleSearchMovie()}/>
                  </div>
                </li>
            </ul>
        </div>
       );
    }
    
  }
  
}

