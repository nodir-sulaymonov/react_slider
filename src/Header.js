import React from "react";
import ModalButton from "./ModalButton";
import "./index.css";

const NavItem = props => {
    const pageURI = window.location.pathname + window.location.search
    const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
    return (
        <li className={liClassName}>
            <a href={props.path} className="nav-link" id="brand">
                {props.name}
                {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    );
}


class Navigation extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                <a className="navbar-brand" id="brand" href="/">LOGO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavItem path="/" name="Home"/>
                        <NavItem path="/page2" name="About"/>
                        <NavItem path="/page3" name="Galeri"/>
                        <NavItem path="/page3" name="Contact"/>
                    </ul>
                    <div className="col-md-1">
                        <ModalButton/>
                    </div>
                </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;