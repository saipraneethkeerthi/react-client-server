import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import SignUp from './components/SignUp'
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
          <Route exact path="/register" render={()=>PageRender(SignUp)}/> 
          <Route exact path="/login" render={()=>PageRender(SignUp)}/> 
        </Switch>
      </Router>
       
    </>
  );
}

export default App;
