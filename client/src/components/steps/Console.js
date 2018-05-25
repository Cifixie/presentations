import React, { Component } from "react"
import { Button } from "../Components"

const getRandomNumber = () => Math.round(Math.random() * 10)
const dummy = {
  boolean: true,
  number: 7,
  string: 'loso'
}

const NumbersIdontLike = Array(30)
  .fill(true)
  .map(getRandomNumber)
  .map(a => a > 9 ? dummy : null)

class Console extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  decrease = () => {
    console.log(this.state.count)
    this.setState({
      count: --this.state.count,
    })
  }

  increase = () => {
    console.debug(this.state.count)
    this.setState({
      count: ++this.state.count,
    })
  }


  render() {
    const { count } = this.state
    console.count("render")
    return (
      <div>
        <h1>Console</h1>
        <ul>
          <li>Console log</li>
          <li>debug</li>
        </ul>
        <Button good onClick={this.increase}>+</Button>
        <Button bad onClick={this.decrease}>-</Button>
        <strong>{count}</strong>
        <Button onClick={() => NumbersIdontLike.forEach(a => console.log(a))}>
          spam
        </Button>
      </div>
    );
  }
}

export default Console