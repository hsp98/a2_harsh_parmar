import React from 'react';
import "./App.css";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Profile from "./components/Profile";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Bookings from "./components/Bookings";
import ForgotPassword from "./components/ForgotPassword";
import Header from "./Header/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";

export default class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
        <Header isUserLoggedIn="false" />
        <Route exact path="/" component={Home}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/bookings" component={Bookings}/>
        <Route exact path="/offers" component={Offers}/>
        <Route exact path="/aboutus" component={AboutUs}/>
        <Route exact path="/contactus" component={ContactUs}/>
        <Route exact path="/forgotpassword" component={ForgotPassword}/>
        </div>
      </Router>
     );
  }
  
}
