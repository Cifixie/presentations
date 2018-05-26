import React, { Component } from "react";
import { Button, Code, List } from '../Components';
import usersService from '../../services/users'

class Breakpoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fix: false,
    };
  }
  getUsers = async () => {
    const users = await usersService.getUsers();
    debugger
    users.forEach(u => {
      debugger
      if (!this.state.fix) console.log(`user's ${u.name.firstName} age is ${u.age}`)
    })
  }
  toggleState = (key) => () => this.setState({
    [key]: !this.state[key]
  })

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
        <Button onClick={this.getUsers}>Get Users</Button>
        <Button onClick={this.toggleState('fix')}>
          Fix ({ this.state.fix ? "on" : "off"})
        </Button>
      </div>
    );
  }
}

export default Breakpoints