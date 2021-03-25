import { connect } from "react-redux"

const Zähler = (props) => {
    return (
        <div className="zähler">

            <p>Zahl ist:{props.zahl}</p>
            <button onClick={props.zahlhochrechnen}>Hochzählen</button>
            <p>zahl ist:{props.zahl2}</p>
            <button onClick={props.zahlabziehen}>zahlabziehen</button>
        </div>
    )
}
const mapStateToProps = state => ({
    zahl: state.zahl,
    zahl2: state.zahl2

})
const mapDispatchToProps = dispatch => ({
    zahlhochrechnen: () => dispatch({ type: "PLUS" }),
    zahlabziehen: () => dispatch({ type: "MINUS" })
})

export default connect(mapStateToProps, mapDispatchToProps)(Zähler)