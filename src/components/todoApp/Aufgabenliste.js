import AufgabenListenItem from "../todoApp/AufgabenListenItem"
const Aufgabenliste = (props) => {
    return (
        <div classname="Aufgabenliste">
            <h1>unser Aufgabeliste:</h1>
            <ul>

                {props.aufgaben.map((element, index) => {
                    return <AufgabenListenItem key={index} aufgabe={element} />
                })}


            </ul>


        </div>
    )
}


export default Aufgabenliste