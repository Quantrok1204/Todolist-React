import React, { Component } from "react"
import { Todolist } from "./Todolist"

export class Todos extends Component{

    render() { 
        
        let todoList = this.props.todos || [];
        return (
            <div className="todoList">
                {todoList.map(list => {
                    return <Todolist key={list.id} todoUpdated={this.todoUpdated.bind(this)} 
                        remove={this.removeItem.bind(this)} todo={list}/>
                })}
            </div>
        );
    }

    todoUpdated(todo) {
        this.props.todoUpdated(todo);
    }

    removeItem(todo) { 
        this.props.removeItem(todo);
    }
}