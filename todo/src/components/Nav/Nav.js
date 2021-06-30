import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <nav className="Nav">
      <ul className="Nav__list">
        <li className="Nav__listItem">
          <Link className="Nav__link" to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/todo"> Lista de tareas</Link>
        </li>
        <li>
          <Link to="/weather"> El tiempo</Link>
        </li>
      </ul>
    </nav>
    );
  }
}

export default Nav;