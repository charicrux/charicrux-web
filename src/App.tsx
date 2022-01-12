import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/terms-of-service" component={TermsOfService} />
        <Redirect to="/terms-of-service"/>
      </Switch>
    </Router>
  );
}

export default App;
