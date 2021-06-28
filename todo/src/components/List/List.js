import React, { Component } from 'react';
import data from '../../todolist.json'

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            tarea:" ",
            todoList:data
        }
    }

    renderTareas = () => this.state.todoList
                            .map((tarea,i)=> console.log(tarea))

    addTarea = (tarea) =>{
        this.setState({tarea})
        this.setState({todoList:[...this.state.todoList,tarea]})
        alert(`${tarea}`)
    }

    handleSubmit = (event) => {
        event.preventDefaul();
        let tarea = event.target.elements.tarea.value;
        this.addTarea(tarea)
    }

    render(){
        return(
            <section>
                <form onClick={this.handleSubmit}>
                    <label >Tarea:</label><br/><br/>
                    <input type="text" id="tarea" name="tarea"/><br/><br/>
                    <input type="submit" value="Enviar"/>
                </form>
                {this.renderTareas()}
            </section>
        )
    }
}
export default List