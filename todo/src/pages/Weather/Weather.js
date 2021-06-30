import React, { Component } from 'react';
import './Weather.css';
import axios from 'axios';
require('dotenv').config();




class Weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      weather: []
    };
   }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  getWeather = async (city) => {
    let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=dce628ffcdd032c0fc4b14bcb2957997`)
       const weather = res.data;
        this.setState({ weather }); 

        console.log(this.state.weather)
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.getWeather('madrid');

    /* let tarea = event.target.elements.tarea.value;*/
  
  };






  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="city" id="city" />
          <input type="submit" value="SEND" />
        </form>
      </div>
    );
  }
}

export default Weather;