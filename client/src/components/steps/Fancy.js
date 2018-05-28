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
        <h1>Fancy Breakpoints</h1>
        <List>
          <li>HRX </li>
          <li>Show case in chrome</li>
          <li>Expressions</li>
          <li>Watches</li>
        </List>
        <Button onClick={this.doSomething}>Do something</Button>
      </div>
    );
  }
}

export default Breakpoints