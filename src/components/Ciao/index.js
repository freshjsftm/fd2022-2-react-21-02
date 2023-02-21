import React, { Component } from "react";

class Ciao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHi: true,
    };
  }
  handleSwitch = () => {
    const { isHi } = this.state;
    this.setState({ isHi: !isHi });
  };
  render() {
    const { isHi } = this.state;
    const { classStyle, name } = this.props;
    return (
      <article className={classStyle}>
        <h2>
          {isHi ? "hi" : "bye"}, {name ?? "anonim"}
        </h2>
        <button onClick={this.handleSwitch}>{isHi?'bye':'hi'}</button>
      </article>
    );
  }
}
export default Ciao;
