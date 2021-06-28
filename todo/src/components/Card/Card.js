import './Card.css'



import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tarea: " "
        }
    }

    render() {
        let {tarea,funcion}  = this.props;
        
        
        return (
            <div>
                <p id="tarea">Tarea: {tarea || "no hay tarea"}</p>
                <button id="btn-remove" onClick= {funcion}>Borrar tarea</button>  
            </div>
        )
    }
}
