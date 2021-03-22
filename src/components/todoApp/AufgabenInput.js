const AufgabenInput = (props) => {
    return (
        <div className="AufgabenInput">
            <input type="text" placeholder="enter your list" value={props.textInput} onChange={props.handleChange} />
            <button onClick={props.aufgabenhinzufügen}>Add</button>
           
        </div>
    )

}
export default AufgabenInput;
