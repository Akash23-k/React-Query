import React, { useState } from "react";
import Todos from "./Todos";
import Posts from "./Posts";
import "../App.css";

export default function App() {
  const [tab, setTab] = useState("Posts");

  return (
    <div className="App">
      <div>
        <button onClick={() => setTab("Posts")}>Posts</button>
        <button onClick={() => setTab("Todos")}>Todos</button>
      </div>
      <div>
        <h3>Result</h3>
        <div>{tab === "Posts" ? <Posts /> : <Todos />}</div>
      </div>
    </div>
  );
}
