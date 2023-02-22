import React, { Component } from "react";
import "./App.css";
import Ciao from "./components/Ciao";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { id: 10, firstName: "Brad", lastName: "Pitt" },
        { id: 7, firstName: "Tom", lastName: "Rot" },
        { id: 3, firstName: "Jon", lastName: "Snow" },
        { id: 12, firstName: "Fred", lastName: "Mercury" },
        { id: 9, firstName: "Georg", lastName: "Clune" },
      ],
      isDirectGrowthById: true,
      isDirectGrowthByFirstName: true,
    };
  }
  sortById = () => {
    const { users, isDirectGrowthById } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => (isDirectGrowthById ? a.id - b.id : b.id - a.id));
    this.setState({ users: newUsers, isDirectGrowthById: !isDirectGrowthById });
  };
  sortByFirstName = () => {
    const { users, isDirectGrowthByFirstName: direction } = this.state;
    const newUsers = [...users];
    newUsers.sort((a, b) => {
      if (a.firstName > b.firstName) {
        return direction ? 1 : -1;
      }
      if (a.firstName < b.firstName) {
        return direction ? -1 : 1;
      }
      return 0;
    });
    this.setState({ users: newUsers, isDirectGrowthByFirstName: !direction });
  };
  render() {
    const { users, isDirectGrowthById, isDirectGrowthByFirstName } = this.state;
    return (
      <>
        <button onClick={this.sortById}>
          sort by id {isDirectGrowthById ? "growth" : "decrease"}
        </button>
        <button onClick={this.sortByFirstName}>
          sort by first name {isDirectGrowthByFirstName ? "growth" : "decrease"}
        </button>
        {users.map((user) => (
          <Ciao
            key={user.id}
            id={user.id}
            name={user.firstName + " " + user.lastName}
            classStyle="welcome"
          />
        ))}
      </>
    );
  }
}

export default App;
