import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = <h1>Hello, World</h1>;

function tick() {
  const elements = (
    <div>
      <h1>Hello ,World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(elements);
}

//root.render(element);
setInterval(tick, 1000);
