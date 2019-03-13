import React, { Component } from 'react';
import '../css/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home container">
        <h1>
          <span className="welcome-to">Welcome to</span> <br /> Postie
        </h1>
        <img
          src="https://images.complex.com/complex/images/c_limit,w_680/fl_lossy,pg_1,q_auto/tkxndk4gl61ruxtjqtyb/post-malone-siriusxm"
          alt="Post Malone"
        />
      </div>
    );
  }
}
