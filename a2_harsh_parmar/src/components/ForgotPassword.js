import React from 'react';

export default class ForgotPassword extends React.Component {
  render(){
    return (
      <div className="App">
          <form className="form">
              <h1>Enter Your Email Address</h1>
              <input type="email" id="email" name="email"/>
              <br/>
              <br/>
              <button type="submit" id="submit">Submit</button>
          </form>
      </div>
     );
  }
  
}

