import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Impress } from 'react-impressjs';
import styled from 'styled-components';

import Presentation from './Presentation'

import Breakpoints from './steps/Breakpoints'
import Console from './steps/Console'
import Me from './steps/Me'
import Template from './steps/Template'
import Todo from './steps/Todo'

class App extends Component {
  render() {
    return (
      <Presentation data={[
        {},
        { x: 1000, y: -1000, rotateX: 45 },
        { x: -1000, y: -1000, rotateX: 90 },
        { x: 1000, y: 1000, rotateX: 135 },
      ]}>
        <Me />
        <Console />
        <Breakpoints />
      </Presentation>
    );
  }
}
export default App;