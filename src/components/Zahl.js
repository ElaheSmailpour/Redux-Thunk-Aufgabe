import { connect } from "react-redux"
import {addieren} from "../thunk/thunk"
 
const Zahl=(props)=>{
    return(
        <div className="zahl">
        <p>zahl ist :{props.hoch}</p>
        <button onClick={props.addieren}>add</button>
        </div>
    )
   
}

const mapStateToProps = state => ({
   hoch:state.hoch 
})
   
export default  connect(mapStateToProps,{addieren})(Zahl)