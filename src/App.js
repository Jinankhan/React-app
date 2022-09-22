import React from 'react';
import './App.css';
import { Homepage } from './containers/homepage';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom'
import { CustomerAccessPage } from './containers/customerAccesPage';
import { Homepage1 } from './containers/Homepage1';



function App(props) {
  
  return ( <div className="App">
<Router>
  <Switch>
  
  <Route  path='/' exact component ={Homepage}/>
  <Route
            path="/customer/access"
            exact
            component={CustomerAccessPage}/>
<Route path='/redirect' exact component ={Homepage1}/>

 </Switch>
 </Router>
 
 </div>
  )
}

export default App;
