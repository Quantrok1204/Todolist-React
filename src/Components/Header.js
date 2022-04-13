import React, { Component } from "react"
import  { Todos }  from "./Todos"
import { Module } from "../Modules/Module"
import { Localstorage } from "../Helper/Localstorage"
import { Footer } from "./Footer";

export class Header extends Component{
    storage = null;
    constructor() {
        super();
        this.state = { data: []};
        this.storage = new Localstorage("key");
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleAll = this.handleAll.bind(this);
        this.handleActive = this.handleActive.bind(this);
        this.handleCompleted = this.handleCompleted.bind(this);
        this.handleSelectAll = this.handleSelectAll.bind(this);
        this.handleClearCompleted = this.handleClearCompleted.bind(this);
    }

    render() { 

        return (
            <div className="toDoMain">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input className="input" ref="text" placeholder="  Add New Todo..." 
                        type="text" value={this.state.value}/>
                    </label>
                        <input type="submit" value="Submit" 
                        onClick={this.handleSubmit.bind(this)}/>
                </form><hr />
                <Todos todoUpdated={this.todoUpdated.bind(this)} 
                    removeItem={this.removeItem.bind(this)} todos={this.state.data}/>    
                <Footer 
                    handleAll={this.handleAll}
                    handleActive= {this.handleActive}
                    handleCompleted={this.handleCompleted}
                    handleSelectAll={this.handleSelectAll}
                    handleClearCompleted={this.handleClearCompleted}
                />
            </div>
        );
    }

    handleAll() {
        if (this.storage) { 
            let all = this.storage.getAll();
            this.setState({ data: all });
        }
        
    }

    handleActive() {
        let newData = [];
        let all = this.storage.getAll();
        for(let i=0 ; i< all.length ; i++) {
            if(all[i].status === false) {
                newData.push(all[i]);
            }
        }
        this.setState({ data: newData });
    }

    handleCompleted() {
        let newData = [];
        let all = this.storage.getAll();
        for(let i=0 ; i< all.length ; i++) {
            if(all[i].status === true) {
                newData.push(all[i]);
            }
        }
        this.setState({ data: newData });
    }

    handleSelectAll() {
        let newList = this.state.data.map((data) => {
            return {...data, status: true};
        });
        this.setState({data: newList});
    }

    handleClearCompleted() {
        this.setState({data: this.state.data.filter(data => data.status === false)});
        this.storage.write(this.state.data.filter(data => data.status === false));
    }

    handleOnChange(event) {
        this.setState({data: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault(event);
        let val = this.refs.text.value;
        if (val && val.length) { 
            this.state.data.push(new Module(val));
            this.setState(this.state.data);
            this.refs.text.value = "";
            this.storage.write(this.state.data);
        }
    }
    
    removeItem(todo) { 
        let index = this.state.data.indexOf(todo);
        if (index > -1) {
            this.state.data.splice(index, 1);
            this.setState(this.state.data);
            this.storage.write(this.state.data);
        }
    }

    todoUpdated(todo) { 
        this.storage.write(this.state.data);
    }

    componentDidMount() { 
        if (this.storage) { 
            let all = this.storage.getAll();
            this.setState({ data: all });
        }
    }

}
