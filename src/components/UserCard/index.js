import React, { Component } from "react";

class UserCard extends Component {
  render() {
    const {
      user: { id, firstName, lastName, isSelected },
      userSelector
    } = this.props;
    const styles = { color: isSelected ? "teal" : "pink" };
    return (
      <article style={styles}  onClick={() => {userSelector(id)}}>
        <h3>
          <em>{id}) </em>
          {firstName} {lastName}
        </h3>
      </article>
    );
  }
}

export default UserCard;
