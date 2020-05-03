import React from "react";
import Form from './Form'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom"



const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <nav>
        <button>
          <Link to="/">        
          <h1>Home</h1>
          </Link> 
        </button>
      </nav>
    
      <button>
        <Link to="/pizza" component={Form}>
        <h3>Pizza</h3>
        </Link>
        </button>
  <Switch>
    <Route path="/" />
    <Route path="/Form" />


  </Switch>
    </>
  );
};
export default App;
