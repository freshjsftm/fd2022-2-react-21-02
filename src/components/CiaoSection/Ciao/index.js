import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Ciao.module.scss";

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
    const { classStyle, name, id } = this.props;
    if (!isHi) {
      return (
        <p>
          {" "}
          id:{id} Bye, {name ?? "anonim"}
        </p>
      );
    }
    return (
      <article className={classStyle}>
        <h2 className={styles.container}>
          {" "}
          id:{id}){isHi ? " hi" : " bye"}, {name ?? "anonim"}
        </h2>
        <button className={styles.btn} onClick={this.handleSwitch}>
          {isHi ? "bye" : "hi"}
        </button>
      </article>
    );
  }
}

Ciao.propTypes = {
  classStyle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Ciao;
