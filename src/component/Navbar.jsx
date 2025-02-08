import { useState } from "react"
import { Navigate } from "react-router-dom"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loginDrop, setLoginDrop] = useState(false)
    return (
        <nav className="navbar">


            <div className="logo"><img src="./logo.png" alt="pet" />PetVet</div>


            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><a href="/">Home</a></li>
                <li
                    className="dropdown"
                    onClick={() => setDropdownOpen(!dropdownOpen)}

                >
                    <a href="#">Services ⬇</a>
                    {dropdownOpen && (
                        <ul className="dropdown-menu">
                            <li><a href="#">Possible Disease For Your Dog</a></li>
                            <li><a href="#">Possible Disease For Your Cattle</a></li>
                            <li><a href="#">Emergency Care</a></li>

                        </ul>
                    )}
                </li>


                <li><a href="/healthguide">Health Guide</a></li>
                <li><a href="#">Appointments</a></li>

                <li className="dropdown"
                    onClick={() => setLoginDrop(!loginDrop)}>
                    <a href="#" className="login-btn">Login</a>
                    {loginDrop && (<ul className="dropdown-menu">
                        <li><a href="/login">Login as Pet Owner</a></li>
                        <li><a href="#">Register as PetVet</a></li>


                    </ul>)}

                </li>
                <li><a href="#">Contact</a></li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </nav>
    )
}

export default Navbar