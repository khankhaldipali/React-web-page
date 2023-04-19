import logo from './../logo.svg';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-md ">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <a href="#" className='d-flex App-link align-items-center '>
                                        <img src={logo} className="App-logo" alt="logo" />
                                        <h1 className="react-logo">React</h1>
                                    </a>
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/">
                                                Home
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/about">
                                                About
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/service" >
                                                Service
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" aria-current="page" to="/contact" >
                                                Contact
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </>
    )
}
export default Navbar;