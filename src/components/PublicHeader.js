import React from 'react';
import {NavLink} from 'react-router-dom';
const PublicHeader = () =>(
    <div>
        <NavLink to= '/register' activeClassName="is-active">Register</NavLink>
        <NavLink to ='/help'activeClassName ='is-active'>Help</NavLink>
        <NavLink to="/" activeClassName="is-active">Login</NavLink>
    </div>
)
export default PublicHeader;