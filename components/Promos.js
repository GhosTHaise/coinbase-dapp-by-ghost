import React from 'react'
import styled from "styled-components"

const Promos = () => {
  return (
    <Wrapper>
        <OfferedCard>
            <Title>
                Yield earned
            </Title>
            <Description>
                Earn up to 2.84% APY on your Crypto
            </Description>
            <Placeholder />
            <Additional style={{fontSize:'1.5rem'}}>
                $0.000066 <span>2.82% APY</span>
            </Additional>
        </OfferedCard>
        <OfferedCard>
            <Title>
                Learn and earn
            </Title>
            <Description>
                Earn up to 2.84% on your crypto
            </Description>
            <Placeholder />
            <Additional style={{color : '#3773f5'}}>
                Verify Identity
            </Additional>
        </OfferedCard>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top:2rem;
    padding-right:1rem;
`;
const OfferedCard = styled.div`
    width:20rem;
    height:11rem;
    border:1px solid #282b2f;
    margin-bottom:1rem;
    padding:1.5rem;
    display:flex;
    flex-direction:column;
`;
const Title = styled.div`
    font-weight:700;
    font-size:1.5rem;
    margin-bottom:.1rem;
`;
const Description = styled.div`
    font-size:1.1rem;
    color:#f0f0f0;
`;
const Placeholder = styled.div`
    flex:.9;
`;
const Additional =styled.div`
    font-size:1.1rem;
    font-weight:700;
    display:flex;
    align-items:center;
    justify-content:space-between;

    & > span {
        color: #8a919e;
        font-size:1rem;
    }
`;


export default Promos