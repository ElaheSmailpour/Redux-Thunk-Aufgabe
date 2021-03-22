import AufgabenListeItem from './AufgabenListenItem'

const AufgabenListe = (props) => {
    return(
    <div className='Aufgaben'>
        
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