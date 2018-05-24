import React, { Fragment, Component } from "react";

class Counter extends Component {
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
        <strong>{count}</strong>
        <span onClick={this.increase}>+</span>
        <span onClick={this.decrease}>-</span>
      </div>
    );
  }
}

const NumbersIdontLike = Array(5).fill(true).map(Math.random).map(a => Math.round(a*10));

export default () => (
  <Fragment>
    <h1>Console</h1>
    <ul>
      <li>Console log</li>
      <li>debug</li>
      <li>and table</li>
    </ul>
    <Counter />
    <span onClick={() => NumbersIdontLike.forEach(a => console.log(a))}>
      spam
    </span>
  </Fragment>
)
