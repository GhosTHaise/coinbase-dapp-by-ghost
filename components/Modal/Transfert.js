import React from 'react'
import styled from 'styled-components'
const Transfert = () => {
  return (
    <Wrapper>
        <Amount>
            <FlexInputContainer>
                <FlexInput placeholder='0' type="number" />
            </FlexInputContainer>
        </Amount>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    flex:1;
`;

const Amount = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
`;  
const FlexInputContainer = styled.div`
    flex:1;
    display:flex;
    align-items:flex-end;

    & > span {
        font-size:3rem;
        margin-bottom:.5rem;
        color:#3223f5;
    }
`;
const FlexInput = styled.input`
    border:none;
    background:none;
    outline:none;
    color:white;
    font-size:1.2rem;
    text-wrap:wrap;
    text-align:right;
    max-width:45%;
    margin-right:1rem;
    font-size:4.5rem;
    color:#3773f5;

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button,
    -webkit-appearence:none;
`;
const Warning = styled.div`
    padding:1rem 0 2rem 0;
    text-align:  center;
    color:#8a919e;
`;

export default Transfert