import { NavLink } from "react-router-dom";
import './navbar.css';
import {ReactComponent as Logo} from '../assets/images/AP SVG.svg';

function Navbar() {
    return (
        <div className="Navbar d-flex aic">
            <div className="navbar-container pad-y-2 pad-x-5 w-100">
                <div className="navbar-wrapper d-flex jcsb aic">
                    <div className="navbar-logo-container" >
                        <Logo style={({width: '50px'})} />
                    </div>
                    <div className="navbar-links-container">
                        <div className="navbar-links-wrapper d-flex jcc aic gap-4">
                            <NavLink to="/" className={(navData) => (navData.isActive ? "active" : '') + " navbar-link link-deco-none" }>home</NavLink>
                            <NavLink to="/me" className={(navData) => (navData.isActive ? "active" : '') + " navbar-link link-deco-none" }>me</NavLink>
                            <NavLink to="/work" className={(navData) => (navData.isActive ? "active" : '') + " navbar-link link-deco-none" }>work</NavLink>
                            <NavLink to="/services" className={(navData) => (navData.isActive ? "active" : '') + " navbar-link link-deco-none" }>services</NavLink>
                            <NavLink to="/contact" className={(navData) => (navData.isActive ? "active" : '') + " navbar-link link-deco-none" }>contact</NavLink>
                        </div>
                    </div>
                    <div className="navbar-right-side-container"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;