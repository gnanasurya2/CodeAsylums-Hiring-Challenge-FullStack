import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Contest from "./containers/Contests";
import SigninLayout from "./components/SigninLayout";
import Dashboard from "./containers/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <SigninLayout>
              <Dashboard />
            </SigninLayout>
          </Route>
          <Route path="/">
            <Layout>
              <Contest />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
