import React,{useState} from 'react'
import styled from 'styled-components'
import {FaWallet} from "react-icons/fa"

const Transfert = () => {
  const [amount,setAmount] = useState(); 
  return (
    <Wrapper>
        <Amount>
            <FlexInputContainer>
                <FlexInput onChange={ e => setAmount(e.target.value)} placeholder='0' type="number" value={amount} />
                <span>ETH</span>
            </FlexInputContainer>
            <Warning style={{color: amount && "#0a0b0d"}}>
                Amount is a requred field 
            </Warning>
        </Amount> 
        <TransfertForm>
            <Row>
                <FieldName>To</FieldName>
                <Icon>
                     <FaWallet />
                </Icon>
                <Recipient 
                    placeholder='Address'
                />
            </Row>
            <Divider />
            <Row>
                <FieldName>
                    Pay with
                </FieldName>
                <CoinSelectList>
                    <icon>
                        <FaWallet />
                    </icon>
                    <CoinName>Ethereum</CoinName>
                </CoinSelectList>
            </Row>
        </TransfertForm>
        <Row>
            <Continue>
                Continue
            </Continue>
        </Row>
        <Row>
            <BalanceTitle>ETH Balance</BalanceTitle>
            <Balance>0.00</Balance>
        </Row>
    </Wrapper>
  )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
`;

const Amount = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;  

const TransfertForm = styled.div`
    border:1px solid #282b2f;
    border-radius: 0.4rem;
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
    ::-webkit-inner-spin-button{
        -webkit-appearence:none;
    }
`;
const Warning = styled.div`
    padding:1rem 0 2rem 0;
    text-align:  center;
    color:#8a919e;
`;
const Divider = styled.div`
    border-bottom:1px solid #282b2f;
`;
const Row = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    justify-content:space-between;
    color : #8a919e;
    padding:1rem 0;
    font-size:1.2rem;
`;
const FieldName = styled.div`
    flex:.5;
    padding-left:2rem;
`;
const Icon = styled.div`
    margin-right:1rem;
    height:1.8rem;
    width:1.8rem;
    height:1.8rem;
    border-radius:50%;
    overflow:hidden;
    display:grid;
    place-items:center;
    
    & > img {
        height:120%;
        width:120%;
        object-fit:cover;
    }
`;
const Recipient = styled.input`
    width:99%;   
    flex: 1;
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 1.2rem;
    text-wrap: wrap;
    margin-right: 0.5rem;
`;


const CoinSelectList = styled.div`
    display:flex;
    flex:1.2;
    height:100%;

    &:hover {
        cursor:pointer;
    }
`;
const CoinName = styled.div`
    width:90%;
    flex:1;
    padding-left:1.7rem;
    border:none;
    background:none;
    outline:none;
    color:white;
    font-size:1.2rem;
    text-wrap:wrap;
    margin-right:.5rem
`;
 
const Continue = styled.button`
    color:white;
    width:100%;
    background-color:#3773f5;
    padding:1rem;
    text-align:center;
    border-radius:.4rem;
    font-size:1.2rem;
    transition: all .3s; 
    &:hover{
        cursor:pointer;
        background-color:#4a80f6;
    }
`;
const BalanceTitle = styled.div`

`;
const Balance = styled.div``;

export default Transfert