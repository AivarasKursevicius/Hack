import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from "../../common/treeConnect.svg"

const headerStyle = {
    height: '70px',
    width: '100%',
    display: 'flex',
    margin: '25px 25px 50px 25px'
};

const logoStyle = {
    width: '80%',
    margin: '0 auto'
};

const signUpStyle = {
    margin: '30px 0 0 1500px',
};

const Header = () => (
    <div className="header" style={headerStyle}>
        <Link to="/" className="logo-container">
            <div class="logo" style={logoStyle}>
                <LogoImage />
            </div>
        </Link>
        <div style={signUpStyle}>
            <Link to="/signUp" className="logo-container">
                <div>
                    SIGN UP
                </div>
            </Link>
        </div>
    </div>
)
export default Header;