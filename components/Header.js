import React from 'react'
import styled from "styled-components"
const Header = ({walletAddress}) => {
  return (
    <Wrapper>
        <Title>Assets</Title>
        <ButtonsContainer>
            <WalletLink>
                <WalletLinkTitle>Wallet connected</WalletLinkTitle>
                <WalletAddress>{walletAddress.slice(0,7)} ... {walletAddress.slice(-7)}</WalletAddress>
            </WalletLink>
            <Button style={{backgroundColor:'#3773f5',color:"#000"}}>
                Buy / Sell
            </Button>
            <Button>
                Send / Receive
            </Button>
        </ButtonsContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width:calc(100% - 3rem);
    padding:1rem 1.5rem;
    border-bottom:1px solid #282b2f;
    display:flex;
    align-items:center;
`;
const Title = styled.div`
    font-size:2rem;
    font-weight:600;
    flex:1;
`;

const ButtonsContainer = styled.div`
    display:flex;
`;
const Button = styled.div`
    border:1px solid #282b2f;
    padding:.8rem;
    font-size:1.23rem;
    font-weight:500;
    border-radius:.4rem;
    margin-right:1rem;
    &:hover{
        cursor:pointer;
    }
`;

const WalletLink = styled.div`
    font-size:.8rem;
    border:1px solid #282b2f;
    border-radius:50rem;
    font-size:1.2rem;
    margin-right:1rem;
    padding:0 1.2rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const WalletLinkTitle = styled.div`
    font-size:1.1rem;
    margin-bottom:.3rem;
    color:#27ad75;
    font-weight:600;
`;

const WalletAddress = styled.div`
    font-size:.8rem;
`;

export default Header