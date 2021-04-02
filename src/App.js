import React from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import routes from "./routes";
import GlobalStyles from './components/GlobalStyles'

const App = () => {
  const routing = useRoutes(routes);
  return routing;
};

const AppWrapper = () => {
  return (
    <Router>
      <GlobalStyles/>
      <App />
    </Router>
  );
};

export default AppWrapper;
