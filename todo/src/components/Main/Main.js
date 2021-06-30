import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Weather from "../../pages/Weather";
import List from '../../pages/List';
import "./Main.scss"; 

export default class Main extends Component {
  render() {
    return (
      <main className="Main">
        <div className="wrapper">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/todo" component={List} />
            <Route path="/weather" component={Weather} />
          </Switch> 
        </div>
      </main>
    );
  }
}
