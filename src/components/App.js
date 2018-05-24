import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Impress, Step } from 'react-impressjs';

import Console from './steps/Console'
import Me from './steps/Me'
import Template from './steps/Template'
import Todo from './steps/Todo'

import 'react-impressjs/styles/react-impressjs.css';

class App extends Component {
  render() {
    return (
      <Impress hint={false}>
        <Step>
          <Me />
        </Step>
        <Step data={{ x: 1000, y: -1000, rotateX: 180 }}>
          <Console />
        </Step>
        <Step data={{ x: -1000, y: -1000, rotateX: 90 }}>
          <Todo />
        </Step>
        <Step data={{ x: 1000, y: 1000, rotateX: 0 }}>
           <Template />
        </Step>
      </Impress>
    );
  }
}
export default App;