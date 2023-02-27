import React, { Component } from "react";
import styles from "./SignInForm.module.css";
const initialState = {
  email: "",
  password: "",
};

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {...initialState};
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    console.log(target.email.value);
    console.log(target.password.value);
    this.setState({...initialState});
  };
  // handleEmail = ({ target: { value } })    => this.setState({ email: value });
  // handlePassword = ({ target: { value } }) => this.setState({ password: value });
  handleInput = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const { email, password } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="email"
          placeholder="email"
          name="email"
          //виводить значення стану
          value={email}
          // брати значення яке ввели і заносити у стан
          onChange={this.handleInput}
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={this.handleInput}
        />
        <input className={styles.input} type="submit" value="send" />
      </form>
    );
  }
}

export default SignInForm;
