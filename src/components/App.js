import { Component } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./Navbar";

class App extends Component {
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
