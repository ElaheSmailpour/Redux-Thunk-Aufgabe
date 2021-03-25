import { connect } from "react-redux"
import PropTypes from 'prop-types';
import {addButton} from "../thunk/thunk"
const ButtonMitInfo = (props) => {
    return (
        <div className="ButtonMitInfo">


            <p>Buttonzahl ist:{props.buttonZahl}</p>

            <button onClick={(event) => { props.addButton(event.target.value) }}
                value={props.auswahl.a}> {props.auswahl.a}</button>
            <button onClick={(event) => { props.addButton(event.target.value) }}
                value={props.auswahl.b}> {props.auswahl.b}</button>

            <button onClick={(event) => { props.addButton(event.target.value) }}
                value={props.auswahl.c}> {props.auswahl.c}</button>



        </div>

    )
}
ButtonMitInfo.prototypes={
    addButton:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    buttonZahl: state.buttonZahl,
    auswahl: state.auswahl
})


export default connect(mapStateToProps, {addButton})(ButtonMitInfo)