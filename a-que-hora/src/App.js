import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home.js"
import ScrollTop from './components/ScrollTop.js'

function App() {
  return (
    <div>
       <Router>
        <ScrollTop/>
        <Switch>

           <Route exact path="/"  component= {Home} />

        </Switch>
      </Router>


      
    </div>
  );
}

export default App;
