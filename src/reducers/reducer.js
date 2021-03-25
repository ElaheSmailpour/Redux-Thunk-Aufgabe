
const initialState = {
    zahl: 1,
    zahl2: 100,
    buttonZahl: 0,
    auswahl: {
        a: 10,
        b: 20,
        c: 50,
    },
    name: "Unbekannter"
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "PLUS":
            return ({ ...state, zahl: state.zahl + 1 })
        case "MINUS":
            return ({ ...state, zahl2: state.zahl2 - 1 })
        case "ADDBUTTON":
            return ({ ...state, buttonZahl: action.payload })
           
            case "NAME_HINZUFUEGEN":
            return {...state, name: action.payload }

        default:
            return state;
    }
}