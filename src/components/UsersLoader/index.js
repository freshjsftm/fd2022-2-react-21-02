import React, { Component } from "react";
import { getRandomUsers } from "../../api";
import Spinner from "../Spinner";
import Error from "../Error";
import UsersList from "./UsersList";
import Paginate from "../Paginate";

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
    getRandomUsers({ page: currentPage })
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
      return <Error />;
    }
    if (isPending) {
      return <Spinner />;
    }
    return (
      <section>
        <h2>Users List</h2>
        <Paginate
          currentPage={currentPage}
          handlePrevBtn={this.handlePrevBtn}
          handleNextBtn={this.handleNextBtn}
        />
        <UsersList users={users} />
      </section>
    );
  }
}

export default UsersLoader;
