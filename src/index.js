//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>My pets' names are: </h1>
    <ul>
      <li>Katryn</li>
      <li>Oscar</li>
      <li>Wallace</li>
    </ul>
  </div>,
  document.getElementById("root")
);
