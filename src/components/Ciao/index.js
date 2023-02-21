import React, { Component } from "react";

class Ciao extends Component {
  render() {
    const { classStyle, name, isHi } = this.props;
    return (
      <h2 className={classStyle}>
        {isHi ? "hi" : "bye"}, {name ?? "anonim"}
      </h2>
    );
  }
}

export default Ciao;
