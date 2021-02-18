import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";

import Home from "./Home";
// import PortfoiloDetail from "./PortfoiloDetail";
import BlogDetail from "./BlogDetail";
import Portfolio from "./Portfolio";
import Services from "./Services";
import BlogCategoryList from "./BlogCategoryList";

const Main = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/blogs/:category/:page" component={BlogCategoryList} />
          <Route path="/blogs/:page" component={Blog} />
          <Route path="/blog/:slug" component={BlogDetail} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<Main />, appDiv);

export default Main;
