import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Signup from './components/Signup'
import Login from "./components/Login"
import Header from './components/Header'
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
        </Switch>
      </Router>
       
    </>
  );
}

export default App;
