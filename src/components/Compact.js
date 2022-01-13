import "./Compact.css";
import logo from "../assets/logo.jpg";

const Compact = () => {
    
    return (
        <nav className="navbar">
            <img className='logo' alt='logo' src={logo} width="100" height="50"/>

            <ul className="navbar_links">
                <li className="navbar_item">
                    <a href="/" className="navbar_link">Accueil</a>
                </li>
                <li className="navbar_item">
                    <a href="/citadine" className="navbar_link">Citadine</a>
                </li>
                <li className="navbar_item">
                    <a href="/compact" className="navbar_link">Compact</a>
                </li>
                <li className="navbar_item">
                    <a href="/suv" className="navbar_link">SUV</a>
                </li>
                <li className="navbar_item">
                    <a href="/about" className="navbar_link">Qui sommes-nous?</a>
                </li>
            </ul>

            <button className="navbar_burger">
                <span className="burger-bar"></span>
            </button>

        </nav>
    );
};

export default Compact;