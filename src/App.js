import React, { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./router/Routers";



class App extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </Fragment>

    )
  }
}

export default App;
