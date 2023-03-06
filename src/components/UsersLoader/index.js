import React, { Component } from "react";
import { getRandomUsers } from "../../api";

class UsersLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isPending: false,
      error: null,
      currentPage: 1,
    };
  }
  load = () => {
    const { currentPage } = this.state;
    this.setState({ isPending: true });
    getRandomUsers({page:currentPage})
      .then((data) => this.setState({ users: data.results }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isPending: false }));
  };
  componentDidMount() {
    this.load();
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.load();
    }
  }
  mapUsers = (user) => <li key={user.login.uuid}>{user.email}</li>;
  handlePrevBtn = () => {
    if (this.state.currentPage > 1) {
      this.setState((state) => ({ currentPage: state.currentPage - 1 }));
    }
  };
  handleNextBtn = () =>
    this.setState((state) => ({ currentPage: state.currentPage + 1 }));
  render() {
    const { users, isPending, error, currentPage } = this.state;
    if (error) {
      return <h3>Error!</h3>;
    }
    if (isPending) {
      return <h3>Loading...</h3>;
    }
    return (
      <section>
        <h2>Users List</h2>
        <div>
          <button onClick={this.handlePrevBtn}>prev &lt; </button>
          <strong> {currentPage} </strong>
          <button onClick={this.handleNextBtn}> &gt; next</button>
        </div>
        <ul>{users.map(this.mapUsers)}</ul>
      </section>
    );
  }
}

export default UsersLoader;
