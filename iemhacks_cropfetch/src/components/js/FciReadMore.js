import React from 'react'
import FadeIn from "react-fade-in";

import "../css/FciReadMore.css"
import x_symbol from "./images/x_symbol.svg"
const FciReadMore = ({closePopup}) => {
    return (
        <FadeIn className="Container">
            <img src={x_symbol} onClick={closePopup} alt="Close"></img>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        
        </FadeIn>
    )
}

export default FciReadMore
