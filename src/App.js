import React from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const routing = useRoutes(routes);
  return routing;
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
