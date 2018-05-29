import React, { Component } from "react";
import { Button, List, Code } from "../Components";
import usersService from "../../services/users";

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 50,
      debug: false
    };
  }

  decrease = () => {
    console.log(this.state.count);
    this.setState({
      count: --this.state.count
    });
  };

  increase = () => {
    console.debug(this.state.count);
    this.setState({
      count: ++this.state.count
    });
  };

  getUsers = async () => {
    const users = await usersService.getUsers();
    if (this.state.debug) console.debug(users);
    users.forEach(u => {
      console.log(`user's ${u.name.firstName} age is ${u.age}`);
    });
  };
  toggleState = key => () =>
    this.setState({
      [key]: !this.state[key]
    });

  render() {
    const { count } = this.state;
    console.count("render");
    return (
      <div>
        <h1>Console.log</h1>
        <p>It feels like it is still most common way of debugging</p>
        <List>
          <li>console.log</li>
          <li>console.debug</li>
          <li>console.table</li>
          <li>console.count</li>
        </List>
        <Button bad onClick={this.decrease}>
          -
        </Button>
        <strong>{count}</strong>
        <Button good onClick={this.increase}>
          +
        </Button>
        <br />
        <Button onClick={this.getUsers}>getUsers</Button>
        <Button onClick={this.toggleState("debug")}>
          Debug ({this.state.debug ? "on" : "off"})
        </Button>
      </div>
    );
  }
}

export default Console;
