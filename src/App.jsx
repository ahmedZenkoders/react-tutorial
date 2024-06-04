import React from "react";
import Todo from "./components/todo";

const App = () => {
  return (
    <>
      <h1>My todos</h1>
      <Todo text="gym" />
      <Todo text="sports" />
      <Todo text="office-work" />

    </>
  );
}

export default App;
