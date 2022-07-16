import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import {ethers} from "ethers"
import {ThirdwebSDK} from "@3rdweb/sdk"

const sdk = new ThirdwebSDK(new ethers.Wallet(process.env.NEXT_PUBLIC_MEATAMASK_KEY,
    ethers.getDefaultProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")))

const Dashboard = ({address}) => {

    const [sanityTokens,setSanityTokens] = useState([]);
    const [thirdWebTokens,setThirdWebTokens] = useState([])
    /* video => 1:49:31 */
    useEffect(()=>{
        const getsanityTokens = async() => {
                const coins = await  fetch("https://kkrsj98b.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'coins'%5D%0A%7B%0A%20%20name%2C%0A%20%20usdPrice%2C%0A%20%20contractAddress%2C%0A%20%20symbol%2C%0A%20%20logo%0A%7D");
                const sanityTokens = (await coins.json()).result;
                console.log(sanityTokens)
                setSanityTokens(sanityTokens);
                
                setThirdWebTokens(sanityTokens.map(token => sdk.getTokenModule(token.contractAddress))) 
           
        }
        getsanityTokens();
    },[])

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header sanityTokens={sanityTokens} thirdWebTokens={thirdWebTokens} walletAddress={address}  />
        <Main thirdWebTokens={thirdWebTokens} sanityTokens={sanityTokens}  walletAddress={address} />
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