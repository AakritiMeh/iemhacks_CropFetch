import React from 'react'
import styled from 'styled-components'
import FadeIn from "react-fade-in";
import x_symbol from "./images/x_symbol.svg"
import "../css/FarmerReadMore.css"




function FarmerReadMore({closePopup}) {

    return (

        <Container>
            
            <img src={x_symbol} onClick={ closePopup }></img>
            
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
                    id est laborum.
                </p>
            
        </Container>
    )
}

export default FarmerReadMore

const Container=styled.div`
    width:60vw;
    height:auto;
    p{
        text-align:center;
        background-color:#429adc;
        border-radius:14px;
        border:3px solid #303034;
        color:#002427;
        width:50vw;
        height:auto;
        padding:10px 10px;
        justify-content:center;
    }
    img{
        display:flex;
        justify-content:flex-end;
    }
`

