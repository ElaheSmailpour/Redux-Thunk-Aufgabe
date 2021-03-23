import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <ul className="nav">
            <li><Link to="/TodoApp">TodoApp</Link></li>
            <li><Link to="/Hilfe">Hilfe</Link></li>
            <li><Link to="/Home">Home</Link></li>
        </ul>
    )
}

export default Navbar