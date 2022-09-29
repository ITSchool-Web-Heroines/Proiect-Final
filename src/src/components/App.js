import { createElement, Component } from "react";
import { createRoot } from "react-dom/client";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

const rootElement = document.getElementById("app");
createRoot(rootElement).render(<App />);
