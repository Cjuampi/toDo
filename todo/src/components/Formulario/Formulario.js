/* import List from '../List/List';
import Card from '../Card/Card'; */

import React, { Component } from 'react'

export default class Formulario extends Component {
    render() {
        return (
            <div>
                <form >
                    <label >Nombre:</label><br/><br/>
                    <input type="text" id="name" name="name"/><br/><br/>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        )
    }
}
