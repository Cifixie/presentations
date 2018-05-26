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

class App extends Component {
  render() {
    return (
      <Presentation data={[
        { x: 0, y: 0, rotateX: 0 },
        { x: -1000, y: -1000, rotateX: 0 },
        { x: -2000, y: -2000, rotateX: 0 },
        { x: -3000, y: -3000, rotateX: 0 },
        { x: -4000, y: -4000, rotateX: 0 },
        { x: -5000, y: -5000, rotateX: 0 },
        { x: -6000, y: -6000, rotateX: 0 },
        { x: -7000, y: -7000, rotateX: 0 },
        { x: -8000, y: -8000, rotateX: 0 },
        { x: -9000, y: -9000, rotateX: 0 },
        { x: -10000, y: -10000, rotateX: 0 },
      ]}>
        <Me />
        <Console />
        <Breakpoints />
        <Conditioning />
        <Fancy />
        <Server />
        <Fyi />
        <Override />
        <Tools />
        <Mental />
        <Farewells />
      </Presentation>
    );
  }
}
export default App;