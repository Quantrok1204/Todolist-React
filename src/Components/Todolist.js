import React, { Component } from "react"

export class Todolist extends Component{
    constructor() { 
        super();
        this.state = { todo: {}}
    }

    render() { 

        let todo = this.state.todo || {};
        return (
            <>
            <div className="toDoItem">
                <input id={todo.id} type="checkbox" checked={todo.status} 
                    onChange={(event) => this.handleChecked(event.target.checked, todo )}/>
                <label htmlFor={todo.id}></label>
                <input onChange={this.handleEdit.bind(this, todo)} type="text" ref="todo1" value={todo.title}/>
                <span className="delete button" onClick={this.remove.bind(this, todo)}>✖</span>
            </div>
            </>
        ); 
    }

    componentDidMount() { 
        let todo = this.props.todo || {};
        this.setState({ todo: todo });
    }

    handleChecked(state, todo) { 
        todo.status = state;
        this.setState({ todo: todo });
        this.props.todoUpdated(todo);
    }
    
    handleEdit(todo) {
        todo.title = this.refs.todo1.value;
        this.setState({todo: todo});
        this.props.todoUpdated(todo);
    }

    remove(todo) { 
        this.props.remove(todo);
    }
}