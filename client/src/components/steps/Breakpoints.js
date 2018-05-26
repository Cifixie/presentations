import React, { Component } from "react";
import { Button, Code, List } from '../Components';
import usersService from '../../services/users'

class Breakpoints extends Component {
  constructor(props) {
    super(props);
  }

  doSomething = async () => {
    const users = await usersService.getUsers();
    debugger
    users.forEach(u => {
      console.log(`user's ${u.name} age is ${u.age}`)
    })
  }

  render() {
    return (
      <div>
        <h1>Breakpoints (1/2)</h1>
        <p>
          <Code>Debugger</Code>: static breakpoint with in code
        </p>
        <List>
          <li>Easy way of setting breakpoints where needed</li>
          <li>Bit "under developed", but good thing to start with</li>
        </List>
        <Button onClick={this.doSomething}>Do something</Button>
      </div>
    );
  }
}

export default Breakpoints