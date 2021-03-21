import React from 'react'

import AufgabenListe from "../todoApp/AufgabenListe"

import "./todoapp.css"
class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aufgaben: [],
            textInput: ''
        }
        this.aufgabenhinzufügen = this.aufgabenhinzufügen.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    aufgabenhinzufügen() {
        this.setState(state=>({
            aufgaben:[...state.aufgaben,this.state.textInput],
            textInput:''
        }))
    }

    handleChange(event) {
this.setState({textInput:event.target.value})
    }
    render() {
        return (

            <div className="TodoApp">
                <h1>TodoAPP</h1>
                <input type="text" placeholder="enter your list"  value={this.state.textInput} onChange={this.handleChange} />
                <button onClick={this.aufgabenhinzufügen}>Add</button>

                <AufgabenListe aufgaben={this.state.aufgaben} />
            </div>

        );
    }

}

export default TodoApp;