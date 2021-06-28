import './Card.css'



import React, { Component } from 'react'

export default class Card extends Component {


    render() {
        let {tarea}  = this.props.dataToCard;
        return (
            <div>
                <p id="tarea">Tarea: {tarea || "no hay tarea"}</p>
                <button id="btn-remove" onClick={this.props.remove} >Borrar tarea</button>  
            </div>
        )
    }
}
