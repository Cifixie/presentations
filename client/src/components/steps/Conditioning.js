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
    users.forEach(u => {
      if (!this.state.fix) console.log(`user's ${u.name.firstName} age is ${u.age}`)
    })
  }

  toggleState = (key) => () => this.setState({
    [key]: !this.state[key]
  })

  render() {
    return (
      <div>
        <h1>Breakpoints</h1>
        <List>
          <li>Supercharged</li>
          <li>More elegant</li>
          <li>Conditioning (Expressions)</li>
          <li>Watches</li>
          <li>Breakpoints not on my code</li>
          <li></li>
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