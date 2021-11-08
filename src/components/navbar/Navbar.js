import React from 'react';
import { Bars, MenuBtnLink, MenuLink, Nav, NavBtn, NavMenu } from './Navbar.style';

function Navbar() {
    return (
        <Nav>
            <MenuLink to="/">
                <h1>Logo</h1>
            </MenuLink>
            <Bars />
            <NavMenu>
                <MenuLink to="/about" activeStyle>
                    About
                </MenuLink>

                <MenuLink to="/service" activeStyle>
                    Service
                </MenuLink>

                <MenuLink to="/shop" activeStyle>
                    Shop
                </MenuLink>

                <MenuLink to="/contact" activeStyle>
                    Contact
                </MenuLink>

                <MenuLink to="/sing-up" activeStyle>
                    Sing up
                </MenuLink>

                <NavBtn>
                    <MenuBtnLink to="/singin">Sing In</MenuBtnLink>
                </NavBtn>
            </NavMenu>
        </Nav>
    );
}

export default Navbar;
