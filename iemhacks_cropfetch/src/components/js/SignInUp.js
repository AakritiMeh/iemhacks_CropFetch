import React , { useState } from 'react'
import styled from 'styled-components'

function SignInUp() {

    
    return (
        <Container>
            <SubContainer>

                <Farmer>
                    <h1>Farmer</h1>
                    <Buttons>
                        <div>ReadMore</div>
                        <div>Sign In / Sign Up</div>
                    </Buttons>

                </Farmer>
                <FciMember>
                    <h1>FCI Member</h1>
                    <Buttons>
                        <div>ReadMore</div>
                        <div>Sign In / Sign Up</div>
                    </Buttons>
                </FciMember>
            </SubContainer>
        </Container>
  )
}

export default SignInUp

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  
`;

const SubContainer = styled.div`
    width: 80%;
    position: fixed;
    top:20vh;
    bottom:20vh;
    left: 10%; 
    right: 10%;
    box-sizing: border-box;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    display:flex;
    flex-direction:row;
    gap:20px;
    padding:20px;
    border: 2px solid black;
`;

const Farmer=styled.div`
    background-color: #ffffff;    
    padding: 50px 20px;
    text-align: center;
    box-sizing: border-box;
    flex:1;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    border-radius:4px;
    border: 1px solid black;
    display:flex;
    flex-direction:column;
`

const FciMember=styled.div`

    background-color: #ffffff;
    padding: 50px 20px;
    text-align: center;
    box-sizing: border-box;
    border: 1px solid black;
    border-radius:4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    


`

const Buttons = styled.button`
    padding: 10px 20px;
    background-color: #ffff;
    color: black;
    border: none;
    cursor: pointer;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    gap:10px;
    div{
        box-sizing: border-box;
        border: 1px solid black;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        padding:5px 5px;
        border-radius:7px;

        &:hover{            
            transform: scale(1.2); 
            background-color: #f0f0f0; 
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
                    
        }
        
    }

    
    

`


