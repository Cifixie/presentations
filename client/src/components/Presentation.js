import React, { Component } from "react";
import { Impress } from "react-impressjs";
import { Dia } from "./Components";

import "react-impressjs/styles/react-impressjs.css";

class App extends Component {
  render() {
    const { children, data } = this.props;
    return (
      <Impress hint={false}>
        {React.Children.map(children, (child, i) => {
          return <Dia data={data[i]}>{child}</Dia>;
        })}
      </Impress>
    );
  }
}
export default App;
