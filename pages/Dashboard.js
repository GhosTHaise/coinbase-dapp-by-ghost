import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import {ethers} from "ethers"
import {ThirdwebSDK} from "@3rdweb/sdk"
import { client } from '../lib/Sanity'

const query = `*[_type == "coins"]{name,usdPrice,contractAddress,symbol,logo}`

const sdk = new ThirdwebSDK(new ethers.Wallet(process.env.NEXT_PUBLIC_MEATAMASK_KEY,
    ethers.getDefaultProvider("https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")))

const Dashboard = ({address}) => {

    const [sanityTokens,setSanityTokens] = useState([]);
    const [thirdWebTokens,setThirdWebTokens] = useState([])
    /* video => 1:49:31 */
    useEffect(()=>{
        const getsanityTokens = async() => {
                const coins = await client.fetch(query);
                //const sanityTokens = (await coins.json()).result;
                //console.log(coins)
                setSanityTokens(coins);
                
                setThirdWebTokens(coins.map(token => sdk.getTokenModule(token.contractAddress))) 
           
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