import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )
  }
}

export default App;
