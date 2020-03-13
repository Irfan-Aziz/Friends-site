import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h2>Celebrity Network</h2>
            <nav>
        <a href="/home">Home</a>
        <a href="/connection">My Connection</a>
        <a href="/account">Account Details</a>
    </nav>
        </div>
       
    );
};

export default Header;