import { connect } from "react-redux"

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
const mapStateToProps = state => ({
    buttonZahl: state.buttonZahl,
    auswahl: state.auswahl
})
const mapDispatchToProps = dispatsch => ({
    addButton: (auswahl) => dispatsch({ type: "ADDBUTTON", payload: auswahl })
})


export default connect(mapStateToProps, mapDispatchToProps)(ButtonMitInfo)