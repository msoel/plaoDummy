import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import HomePage from "./components/homePage"
import Navbar from './components/common/navbar';
import Notfound from './components/common/notfound';
import Footer from './components/common/footer';


class App extends Component {
  
  render() { 
    return ( 
      
    <React.Fragment>
      <main className="container">
      <Navbar />
          <Switch>
            <Route path="/notfound"  component={ Notfound } />
            <Route path="/" exact component={HomePage} />  
            <Redirect from='/home' to="/" />
            <Redirect to="/notfound"/>  
         </Switch>
        <Footer />
        </main>
    </React.Fragment>
     );
  }
}
 
export default App;