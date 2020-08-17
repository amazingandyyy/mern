import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cointainer">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
