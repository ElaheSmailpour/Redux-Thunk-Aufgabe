import React from 'react'

import Aufgabenliste from "../todoApp/Aufgabenliste"


class TodoApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aufgaben: ["eli", "yasi", "elnaz", "mehdi"]
        }
    }
    render() {
        return (

            <div className="TodoApp">
                <h1>TodoAPP</h1>
                <input type="text" placeholder="enter your list" />
                <button>Add</button>

                <Aufgabenliste aufgaben={this.state.aufgaben} />
            </div>

        );
    }

}

export default TodoApp;