import React from 'react'
import styled from 'styled-components'

const TransfertModal = () => {
  return (
    <Wrapper> 
        <Selector>
          <p>Send</p>
          <p>Receive</p>
        </Selector>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    color:White;
    height:35rem;
    width:27rem;
    border: 1px solid #282b2f;
    display:flex;
    flex-direction:column;
`;
const Selector = styled.div`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:5rem;
`;
export default TransfertModal