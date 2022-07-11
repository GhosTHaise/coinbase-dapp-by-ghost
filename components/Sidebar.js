import React from 'react'
import styled from "styled-components"
import Image from 'next/image'
import { navItems } from '../static/navItems'
import CoinBaseLogo from "../assets/cb-logo.png"

const Sidebar = () => {
  return (
    <Wrapper>
        <LogoContainer>
            <Logo>
                <Image  src={CoinBaseLogo} alt="Coinbase Logo ..." />
            </Logo>
        </LogoContainer>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.div`
    height: 100vh;
    border-right : 1px solid #282b2f; 
    width: calc(22rem - 16px - 16px);
    padding : 0 1rem;
`;

const LogoContainer = styled.div`
    margin:1.5rem;
    
`;

const Logo = styled.div`
    width:44%;
    object-fit:contain;
    margin-left:1.5rem;   
`;

const NavItemContainer = styled.div`
    margin-top:3rem;
    
    &:hover{
        cursor:pointer;
    }
`;
const NavItem = styled.div`
    display:flex;
    align-items:center;
    font-size:1.3rem;
    font-weight:500;
    border-radius:.5rem;
    margin-bottom:1.5rem;
    height:4rem;

    &:hover {
        background-color:#141519;
    }
`;


const NavIcon = styled.div`
    background-color:#141519;
    padding:.7rem;
    border-radius:50%;
    margin:0 1rem;
    display:grid;
    place-items:center;
`;