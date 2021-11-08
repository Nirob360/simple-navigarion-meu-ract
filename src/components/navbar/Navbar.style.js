import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #000;
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 90%) / 2);
    z-index: 10;
`;
export const Bars = styled(FaBars)`
    visibility: hidden;
    color: #fff;

    @media screen and (max-width: 768px) {
        visibility: visible;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    } ;
`;
export const NavMenu = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        visibility: hidden;
    }
`;

export const MenuLink = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: 700;

    &.active {
        color: #15cdfc;
    }
`;
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 30px;
    @media screen and (max-width: 768px) {
        visibility: hidden;
    }
`;
export const MenuBtnLink = styled(NavLink)`
    border-radius: 4px;
    background: #256ce1;
    color: #fff;
    padding: 10px 22px;
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #ffff;
        color: #010606;
    }
`;
