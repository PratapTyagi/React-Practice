import React, { Component } from "react";
import { TheameContext } from "../App.js";

class ClassComponent extends Component {
  toggleStyle(dark) {
    return {
      backgroundColor: dark ? "black" : "grey",
      color: dark ? "whitesmoke" : "black",
      padding: "5%",
      margin: "5%",
      textAlign: "center",
    };
  }

  render() {
    return (
      <TheameContext.Consumer>
        {(darkTheame) => {
          return <p style={this.toggleStyle(darkTheame)}>Class component</p>;
        }}
      </TheameContext.Consumer>
    );
  }
}

export default ClassComponent;
