import React from "react";
import UserProfile from "../UserProfile";

const Child = (props) => {
  return (
    <div style={{ padding: "10px" }}>
      {/* translate  User profile*/}
      <h2>User profile</h2> 
      <UserProfile />
    </div>
  );
};

export default Child;
