import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import WOW from "wowjs";
import "./assets/css/mobster.css";
import "./assets/css/maicons.css";
import "./assets/vendor/animate/animate.css";

const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </>
    </BrowserRouter>
  );
};

export default App;
