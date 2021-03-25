import { connect } from "react-redux"
import {zahlabziehen,zahlhochrechnen} from "../thunk/thunk"
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


export default connect(mapStateToProps, {zahlabziehen,zahlhochrechnen})(Zähler)