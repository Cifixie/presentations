import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Impress } from 'react-impressjs';
import styled from 'styled-components';

import Presentation from './Presentation'

import Breakpoints from './steps/Breakpoints'
import Conditioning from './steps/Conditioning'
import Console from './steps/Console'
import Fancy from './steps/Fancy'
import Farewells from './steps/Farewells'
import Fyi from './steps/Fyi'
import Me from './steps/Me'
import Mental from './steps/Mental'
import Override from './steps/Override'
import Server from './steps/Server'
import Tools from './steps/Tools'
import Vscode from './steps/Vscode'

class App extends Component {
  constructor(props) {
    super(props)
    window.onpopstate = (event) => this.onLocationUpdated(event.target.location.hash)
    this.state = {
      location: null
    }
  }

  onLocationUpdated = (location) => {
    this.setState({
      location
    })
  }

  render() {
    return (
      <Presentation data={[
        { x: 0, y:  4500, rotateY: 90 },
        { x: -4500, y: 4500, rotateX: 90 },
        { x: 4500, y: 4500, rotateX: 90 },
        { x: 4500, y: -1500, rotateX: 90 },
        { x: 4500, y: 0, rotateY: 90 },
        { x: 1500, y: 4500, rotateX: 90 },
        { x: 4500, y: 3000, rotateY: 90 },
        { x: 3000, y: 4500, rotateY: 90 },
        { x: -3000, y: 4500, rotateY: 90 },
        { x: -1500, y: 4500, rotateX: 90 },
        { x: 4500, y: -3000, rotateX: 180 },
        { x: 0, y:  0, rotateY: 90 },
      ]}>
        <Me />
        <Console />
        <Breakpoints />
        <Conditioning />
        <Fancy />
        <Override />
        <Server />
        <Vscode />
        <Fyi />
        <Tools />
        <Mental />
        <Farewells />
      </Presentation>
    );
  }
}
export default App;