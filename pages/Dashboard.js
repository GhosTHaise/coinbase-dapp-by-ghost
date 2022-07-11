import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
const Dashboard = ({address}) => {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header walletAddress={address}  />
        <Main />
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
    display:flex;
    min-height :100vh;
    height:auto;
    width:100vw;
    background-color:"#0a0b0d";
    color:"white";
`;

const MainContainer = styled.div`
    flex:1;
`;