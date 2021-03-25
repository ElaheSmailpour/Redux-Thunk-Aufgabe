import {actionadd,actionaddbutton,actionnameHinzufuegen,actionzahlabziehen,actionzahlhochrechnen} from "../action/actions"

export const addButton=(zahl)=>dispatch=>{
   dispatch(actionaddbutton(zahl))
}

export const nameHinzufuegen=(data)=>dispatch=>{
    dispatch(actionnameHinzufuegen(data))
}


export const zahlhochrechnen=()=>dispatch=>{
    dispatch(actionzahlhochrechnen())
}
export const zahlabziehen=()=>dispatch=>{
    dispatch(actionzahlabziehen())
}

export const addieren=()=>dispatch=>{
    dispatch(actionadd())
}
