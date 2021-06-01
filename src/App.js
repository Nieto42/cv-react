import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Competences" component={Knowledges} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
