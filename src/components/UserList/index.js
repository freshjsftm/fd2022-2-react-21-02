import React, { Component } from "react";
import UserCard from "../UserCard";
const usersDB = [
  { id: 1, firstName: "Brad", lastName: "Pitt" },
  { id: 2, firstName: "Fred", lastName: "Rot" },
  { id: 3, firstName: "Tom", lastName: "Got" },
  { id: 4, firstName: "Tim", lastName: "Cruse" },
  { id: 5, firstName: "Jone", lastName: "Doe" },
  { id: 6, firstName: "Alex", lastName: "Mail" },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB.map((user) => ({ ...user, isSelected: false })),
    };
  }
  userSelector = (id) => {
    const { users } = this.state;
    const newUsers = users.map((user) => ({
      ...user,
      isSelected: user.id === id ? !user.isSelected : user.isSelected,
    }));
    this.setState({ users: newUsers });
  };
  mapUsers = (user) => (
    <UserCard key={user.id} user={user} userSelector={this.userSelector} />
  );
  render() {
    const { users } = this.state;
    return (
      <section>
        <h2>Users list</h2>
        {users.map(this.mapUsers)}
      </section>
    );
  }
}

export default UserList;
