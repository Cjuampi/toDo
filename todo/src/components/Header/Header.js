import React, { Component } from 'react';
import './Header.scss';
import Nav from '../Nav/Nav'

export default class header extends Component {
    render() {
        return (
            <header className='Header'>
                <div className="wrapper">
                <h1>Aplicación Lista ToDo</h1>
                <Nav/>
                </div>
            </header>
        )
    }
}
