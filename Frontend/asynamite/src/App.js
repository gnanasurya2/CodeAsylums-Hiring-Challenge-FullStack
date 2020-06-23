import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contest from "./containers/Contests";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/">
              <Contest />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
