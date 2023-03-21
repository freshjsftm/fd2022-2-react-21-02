import React from "react";
import UserProfile from "../UserProfile";

const Child = (props) => {
  const inlineStyle = { padding: "10px" }
  return (
    <div style={inlineStyle}>
      {/* translate  User profile*/}
      <h2>User profile</h2> 
      <UserProfile />
    </div>
  );
};

export default Child;
