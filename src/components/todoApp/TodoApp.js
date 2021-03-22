import React from 'react'
import "../todoApp/style/bilder.css"
import Bilder from "../todoApp/Bilder"
import Bild1 from "../todoApp/image/vogel1.jpeg"
import Bild2 from "../todoApp/image/blumen.jpeg"
import Bild3 from "../todoApp/image/dolfin.jpeg"

import AufgabenListe from "../todoApp/AufgabenListe"
import AufgabenInput from "../todoApp/AufgabenInput"
import "./todoapp.css"

class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aufgaben: [],
            textInput: '',
            bilder: [
                {
                    bild: Bild1,
                    size: "m",
                    type: "circle"
                },
                {
                    bild: Bild2,
                    size: "l",
                    type: "square"
                },
                {
                    bild: Bild3,
                    size: "s",
                    type: "rounded"
                }
            ]

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
    componentDidMount() {
        console.log("geboren!")
        let speicher = localStorage;
        let aufgaben = speicher.getItem("todoappaufgabe")
        if (aufgaben) {
            let todos = JSON.parse(aufgaben)
            this.setState({ aufgaben: todos })
        }
    }
    componentDidUpdate() {
        console.log("etwas bei state oder props geändert!")
        let speicher = localStorage;
        speicher.setItem("todoappaufgabe", JSON.stringify(this.state.aufgaben))

    }
    componentWillUnmount() {
        console.log("gleich ist schluss!")
    }
    render() {
        return (

            <div className="TodoApp">
                <h1>TodoAPP</h1>

                {this.state.bilder.map((element, index) => {
                    return (
                        <div className="karte">
                            <Bilder src={element.bild} size={element.size} type={element.type} key={index} />
                            <p>type:{element.type}</p>
                        </div>
                    )
                })}

                <AufgabenInput aufgabenhinzufügen={this.aufgabenhinzufügen} handleChange={this.handleChange} textInput={this.state.textInput} />
                <AufgabenListe aufgaben={this.state.aufgaben} />

            </div>



        );
    }

}

export default TodoApp;