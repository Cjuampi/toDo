import React, { Component } from 'react';
import './Header.scss';

export default class header extends Component {
    render() {
        return (
            <header className='Header'>
                <div className="wrapper">
                <h1>Aplicación Lista ToDo</h1>
                </div>
            </header>
        )
    }
}
