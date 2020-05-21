import React from "react";
import Login from "./components/Login";
import { BrowserRouter } from "react-router-dom";


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
