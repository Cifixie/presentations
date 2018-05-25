import React, { Component } from "react";
import { Button } from '../Components';

class Breakpoints extends Component {
  constructor(props) {
    super(props);
  }

  doSomething = () => {
    debugger
  }

  render() {
    return (
      <div>
        <h1>Breakpoints</h1>
        <p>
          <span>`Debugger`</span> keyword <small>static breakpoint with in code</small>
        </p>
        <ul>
          <li>Easy way of setting breakpoints where needed</li>
          <li>Bit "under developed", but good thing to start with</li>
        </ul>
        <Button onClick={this.doSomething}>Do something</Button>
      </div>
    );
  }
}

export default Breakpoints