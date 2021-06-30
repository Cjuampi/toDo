import './Card.scss'



import React, { Component } from 'react'

export default class Card extends Component {


    render() {
        let {tarea}  = this.props.dataToCard;
        console.log(this.props)
        return (
            <div className='divCard'>
                <p id="tarea">Tarea: {tarea || "no hay tarea"}</p>
                <button className="btn-remove" onClick={this.props.remove} >Borrar tarea</button>  
            </div>
        )
    }
}
