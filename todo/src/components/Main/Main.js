import List from '../List/List';
import React, { Component } from 'react';
import './Main.scss';


export default class Main extends Component {
    render() {
        return (
            
            <main className='Main'>
                <div className='wrapper'>
                    <List/>
                </div>         
            </main>
        )
    }
}


