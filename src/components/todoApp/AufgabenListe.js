import AufgabenListeItem from './AufgabenListenItem'

const AufgabenListe = (props) => {
    return(
    <div className='Aufgaben'>
        <h3>Noch zu erledigen</h3>
        <ul>

           
            {props.aufgaben.map((element,index) => {
                return <AufgabenListeItem key={index} aufgabe={element} />
            })
            }
            
        </ul>
    </div>
    )
}

export default AufgabenListe