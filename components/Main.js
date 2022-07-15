import React from 'react'
import styled from 'styled-components'
import Portfolio from './Portfolio'
import Promos from './Promos'

const Main = ({sanityTokens,thirdWebTokens,walletAddress}) => {
  return (
        <Wrapper>
            <Portfolio walletAddress={walletAddress} sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} />
            <Promos />
        </Wrapper>
  )
}

export default Main;

const Wrapper = styled.div`
    display:flex;
    max-height:calc(100vh - 64px);
    overflow:scroll;
    overflow-x:hidden;
    ::-webkit-scrollbar{
        display:none;
    }
    scrollbar-width:none;
    & div {
        border-radius:.4rem;
    }
`;