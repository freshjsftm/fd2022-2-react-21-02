import React from "react";
import "./App.css";

const List = (props) => {
  const { title, children } = props;
  return (
    <article>
      <h2>{title}</h2>
      <ul title={title}>{children}</ul>
    </article>
  );
};

const App = (props) => {
  return (
    <>
      <List title="list" >
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </List>
      <List title="new" >
        <li>qwe</li>
        <li>ad</li>
        <li>qweqwe</li>
      </List>
    </>
  );
};

export default App;
