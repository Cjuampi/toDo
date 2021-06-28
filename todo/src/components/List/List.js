import React, { Component } from 'react';
import Card from '../Card/Card'
import data from '../../todolist.json'
import { v4 as uuidv4 } from 'uuid';

class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            todoList:data
        }
    }

    renderTareas = () => this.state.todoList
                            .map((tarea,i)=> {
                                let keyValue = uuidv4();
                                <Card key={keyValue} dataToCard={tarea} remove ={()=>this.removeOneProduct(keyValue)}/>
                            })

    addTarea = (tarea) =>{
        this.setState({tarea})
        this.setState({todoList:[...this.state.todoList,tarea]})
    }

    removeOneProduct = (i) =>{
        let filteredArray = this.state.todoList.filter((item, j) => i !== j);
        this.setState({todoList:filteredArray})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let tarea = event.target.elements.tarea.value;
        /* console.log(tarea) */
        this.addTarea({tarea})
    }

    render(){
        return(
            <section>
                <form onSubmit={this.handleSubmit}>
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