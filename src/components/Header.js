import React, { Component } from "react";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

import M from 'materialize-css';  

class Header extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {container: true});
    }

    render() {
        const loginButton =  (
            <li>
                <a>
                    <i className="material-icons">vpn_key</i>
                </a>
            </li>
        );

        const logoutButton = (
            <li>
                <a>
                    <i className="meterial-icons">lock_open</i>
                </a>
            </li>
        );

        return (
            <div className="row container">
                <ul id="categorylist" className="dropdown-content">
                    <li><NavLink to="/caretory/all">전체상품</NavLink></li>
                    <li><NavLink to="/caretory/it">IT도서</NavLink></li>
                </ul>

                <nav className="nav-extended">
                    <div className="nav-wrapper blue">
                        <NavLink to="/" className="brand-logo center">MEMOPAD</NavLink>

                        <ul>
                            <li><a onClick={this.toggleSearch}><i className="material-icons">search</i></a></li>
                        </ul>

                        <div className="right">
                            <ul>
                                { this.props.isLoggedIn ? logoutButton : loginButton }
                            </ul>
                        </div>
                    </div>
                    <div className="nav-wrapper blue">
                        <ul className="">
                            <li><NavLink to="/home">HOME</NavLink></li>
                            {/* <li><NavLink to="/category">CATEGORY <i className="material-icons right">arrow_drop_down</i></NavLink></li> */}
                            <li><a className="dropdown-trigger" href="#!" data-target="categorylist">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
    
                            <li><NavLink to="/cart">CART</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool,
    onLogout: PropTypes.func
};

Header.defaultProps = {
    isLoggedIn: false,
    onLogout: () => { console.error("logout function not defined");}
};

export default Header