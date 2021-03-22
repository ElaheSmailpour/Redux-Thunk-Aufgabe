const  AufgabenListeItem = (props) => {
    return(
        <div className="AufgabenListeItem">
        <li>{props.aufgabe} <span onClick={props.löschhändler} id={"todoitem"+props.löschIndex} >[X]</span></li>
      
        </div>
    )
}

export default AufgabenListeItem

