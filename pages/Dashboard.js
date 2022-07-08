import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
const Dashboard = ({address}) => {
  return (
    <Wrapper>
      <MainContainer>
        <Header />
      </MainContainer>
    </Wrapper>
  )
}

export default Dashboard

const Wrapper = styled.div`
    display:flex;
    height :100vh;
    width:100vw;
    background-color:"#0a0b0d";
    color:"white";
`;

const MainContainer = styled.div`
    flex:1;
`;