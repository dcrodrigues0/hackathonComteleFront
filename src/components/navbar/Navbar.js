import React, { Component } from 'react';

// import { Container } from './styles';

// Import Materialize e css
import M from "materialize-css";
import './styles.css';

import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    componentDidMount(){
        M.AutoInit();
    }
    
    render() {
        return(
            <div>
                <div className="navbar-fixed">
                    <nav className="transparent">
                        <div className="nav-wrapper">
                            <Link to={{pathname:"/"}} className="brand-logo"><img alt="Logo SMcash" className="responsive-img logo-nav" src={"./assets/logo.png"}></img></Link>
                            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i style={{color:"black"}} className="material-icons">menu</i></a>
                            <ul className="right hide-on-med-and-down">
                                <li><a className="" href="#!">Entrar</a></li>
                                <li><a className="yellow accent-4 waves-effect btn waves-yellow btn-large destaque-nav" href="#!">Cadastrar</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#!">Entrar</a></li>
                    <li><a href="#!">Cadastrar</a></li>
                </ul>
            </div>
        );
    }
}
