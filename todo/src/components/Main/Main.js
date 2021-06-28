import List from '../List/List';
import React, { Component } from 'react'

export default class Main extends Component {
    render() {
        return (
            
            <main>       
{/*                 <form >
                    <label >Nombre:</label><br/><br/>
                    <input type="text" id="name" name="name"/><br/><br/>
                    <input type="submit" value="ADD"/>
                </form>
                <h2>Lista de cosas que hay que hacer</h2>
                <Card tarea={"Lavar" } funcion={ () => {}}/>
                <Card tarea={"Reir"}/>
                <Card tarea={"comer"}/>
                <Card tarea={"Lavar"}/> */}
                <List />
            </main>
        )
    }
}


