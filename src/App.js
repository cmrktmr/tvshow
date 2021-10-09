import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from "react"
import './App.scss';

import Home from "../src/components/Home/Home"
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"
import PageNotFound from "../src/components/PageNotFound/PageNotFound"
import MovieDetail from "../src/components/MovieDetail/MovieDetail"
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header></Header>

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/shows/:id" component={MovieDetail} />
            <Route component={PageNotFound} />
          </Switch>
          <Footer />




        </div>
      </Router>
    </div>
  );
}

export default App;
