import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Signup from './components/Signup'
import Login from "./components/Login"
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

import Body from './components/Body'


function App() {
  const PageRender=(Page)=>{
    return <Page/>
  }
  return (
    < >
      <Router> 
        <Switch>
          <Route exact path="/register" render={()=>PageRender(Signup)}/> 
          <Route exact path="/login" render={()=>PageRender(Login)}/> 
          <Route exact path="/dashboard" render={()=>PageRender(Dashboard)}/> 
        </Switch>
      </Router>
       
    </>
  );
}

export default App;
