import Head from 'next/head'
import styled from "styled-components"
import { useWeb3 } from '@3rdweb/hooks'
import Dashboard from './Dashboard';

export default function Home() {
  const {address ,connectWallet} = useWeb3();
  return (
    <Wrapper>
      {address ? 
        <Dashboard address={address}></Dashboard>
      : (
        <WalletConnect>
          <Button onClick={() => {connectWallet('injected')}}>Connect Wallet</Button>
          <Details>
            You need Metamask to be
            <br />able to use this app
          </Details>
        </WalletConnect>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
    height:100vh;
    max-width:100vw;
    background-color:#0a0b0d !important;
    color:white;
    display:grid;
    place-items:center;
`;
const WalletConnect = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const Button = styled.button`
    border:1px solid #282b2f;
    padding:0.8rem;
    font-size:1.3rem;
    font-weight:500;
    border-radius:.4rem;
    background-color:#3773f3;
    color:#000;
    transition : all .3s;
    &:hover{
      cursor:pointer;
    }
`;

const Details = styled.div` 
    font-size:1.2rem;
    text-align:center;
    margin-top:1rem;
    font-weight:500;
    color:#282b2f;
`;
