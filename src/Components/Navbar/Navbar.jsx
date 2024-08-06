import { Link, NavLink } from "react-router-dom";


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bgblue p-4 ">
                <div className="container-fluid">
                    <Link   className="navbar-brand fs-1 ps-5 text-white roboto" >Start Framework</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNavAltMarkup">
                        <div className="navbar-nav me-5 pe-2">
                            <NavLink to={'/about'} className="nav-link text-white roboto pe-3" aria-current="page" >ABOUT</NavLink>
                            <NavLink to={'/portfolio'} className="nav-link text-white roboto " >PORTFOLIO</NavLink>
                            <NavLink to={'/contact'} className="nav-link text-white roboto ps-3" >CONTACT</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;