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
      ],
    };
  }
  sortById = () => {
    //отримати масив з юзерами
    const { users } = this.state;
    //відсортувати юзерів не мутуючи наш стан
    const newUsers = [...users];
    newUsers.sort((a, b) => a.id - b.id);
    //const newUsers = JSON.parse(JSON.stringify(users));
    //записати результат у стан
    this.setState({ users: newUsers });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <button onClick={this.sortById}>sort by id</button>
        {users.map((user, index) => (
          <Ciao
            key={index}
            id={user.id}
            name={user.firstName}
            classStyle="welcome"
          />
        ))}
      </>
    );
  }
}

export default App;
