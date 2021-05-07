import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from './Footer';
const App = ()=> {

  return (
<>
<Navbar/>

<Switch>
   <Route exact path="/" component={Home} />
   <Route path="/about" component={About} />

   <Route path="/Contact" component={Contact} />
    <Redirect to="/"/>
 
</Switch>


<Footer/>
</>


  );
}

export default App;