import React from 'react'

import AufgabenListe from "../todoApp/AufgabenListe"
import AufgabenInput from "../todoApp/AufgabenInput"
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
        this.setState(state => ({
            aufgaben: [...state.aufgaben, this.state.textInput],
            textInput: ''
        }))
    }

    handleChange(event) {
        this.setState({ textInput: event.target.value })
    }
    render() {
        return (

            <div className="TodoApp">
                <h1>TodoAPP</h1>
               
                <AufgabenInput aufgabenhinzufügen={this.aufgabenhinzufügen} handleChange={this.handleChange} textInput={this.state.textInput} />
                <AufgabenListe aufgaben={this.state.aufgaben} />
            </div>
            


        );
    }

}

export default TodoApp;