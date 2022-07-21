import React,{useState} from 'react'
import styled from 'styled-components'

const TransfertModal = () => {
  const [action,setAction] = useState('send');
    //2:26:50
   const selectedStyle = {
        color: '#3773f5'
   }

   const unselectedStyle = {
        border : "1px solid #282b2f "
   }
  return (
    <Wrapper> 
        <Selector>
          <Option style={action == "send" ? selectedStyle : unselectedStyle} onClick={() => setAction("send")}>
              <p>Send</p>
          </Option>
          <Option style={action == "receive" ? selectedStyle : unselectedStyle} onClick={()=> setAction("receive")}> 
              <p>Receive</p>
          </Option>
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
const Option = styled.div`
    height:100%;
    width:100%;
    display:grid;
    place-items:center;
    font-size:1.2rem;
    font-weight:600;
    transition: all .3s;
    &:hover{
      cursor:pointer;
      background-color:#111214;
    }
`;

export default TransfertModal