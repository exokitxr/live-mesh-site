import React, { Component } from 'react';
import './App.css';
import logo from './exokit.svg';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="">
            <img src={logo} width="50" height="50" className="d-inline-block align-top" alt=""/>
              Exokit
          </a>
        </nav>
        <ReactTwitchEmbedVideo channel="avaer" width='100%'/>
        <iframe width="80%" height="400" allowFullScreen="yes" scrolling="no" src="https://chriseddy.github.io/threejs-webvr-solarsystem/"/>
      </div>
    );
  }
}

export default App;
