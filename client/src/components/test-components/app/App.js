import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Landing from "../globalcomponents/landing/landing"
import Login from "../globalcomponents/login/login"
import Signup from "../globalcomponents/signup/signup"
import Dashboard from "../globalcomponents/dashboard/dashboard"

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route
        exact
        path="/" 
        render={()=><Landing/>}/>
        <Route
        exact
        path="/login"
        render={()=><Login/>}/>
        <Route
        exact
        path="/signup"
        render={() => <Signup/>}/>
        <Route
        exact
        path="/dashboard"
        render={() => <Dashboard/>}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;