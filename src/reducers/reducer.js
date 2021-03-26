import { ADDBUTTON, NAME_HINZUFUEGEN,ADDRESSEHINZUFÜGEN, PLUS, MINUS,ADD } from "../action/actions"
const initialState = {
    zahl: 1,
    zahl2: 100,
    buttonZahl: 0,
    auswahl: {
        a: 10,
        b: 20,
        c: 50,
    },
    name: "Unbekannter",
    hoch: 20,
    Addresse:""

}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PLUS:
            return ({ ...state, zahl: state.zahl + 1 })
        case MINUS:
            return ({ ...state, zahl2: state.zahl2 - 1 })
        case ADDBUTTON:
            return ({ ...state, buttonZahl: action.payload })

        case NAME_HINZUFUEGEN:
            return { ...state, name: action.payload }
        case ADD:
            return ({ ...state, hoch: state.hoch + 1 })
       case ADDRESSEHINZUFÜGEN:
           return({...state,Addresse:action.payload})
            default:
            return state;
    }
}