import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import {Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to={'/'}>Домашняя страница</Link></li>
                        <li><Link to={'/auth/signup'}>Регистрация</Link></li>
                        <li><Link to={'/auth/signin'}>Войти</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Navigation.propTypes = {};

export default Navigation;
