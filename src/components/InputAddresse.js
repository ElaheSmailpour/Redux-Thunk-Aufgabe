import React from 'react'
import { connect } from 'react-redux'

import {AddresseHinzufügen} from "../thunk/thunk"
class InputAddresse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Addresse: ""
        }
        this.Handlechange = this.Handlechange.bind(this)
    }
    Handlechange(event) {
        this.setState({ Addresse: event.target.value })
    }

    render() {
        return (
            <div className="InputAddresse">
                <input type="text" placeholder="geben Sie bitte Ihre Addresse ein:" onChange={this.Handlechange} value={this.state.Addresse}
                             onBlur={() => {
                                this.props.AddresseHinzufügen(this.state.Addresse)
                                this.setState({AddresseHinzufügen: ''})
                              }}
                />
                <p>Addresse ist:{this.props.Addresse}</p>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    Addresse: state.Addresse
})


export default connect(mapStateToProps, {AddresseHinzufügen})(InputAddresse)