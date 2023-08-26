import React from 'react';
import "./NavBar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {
    const navList = [{id:1, name:"Home"}, {id:2, name:"Login"}, {id:3,name:"Sign up"}];
    return (
        <nav>
            <div>
                <div className="nav-left">
                    CropFetch
                </div>
                <ul className="nav-right">
                    {

                        navList.map((element => {
                            return <li className={`${element.name==="Login"?"login-btn":""} ${element.name==="Sign up"?"signup-btn":""}`} key={element.id}>{element.name}</li>
                        }))
                    }
                </ul>
                <FontAwesomeIcon icon={faBars} className='icon-bars'/>
            </div>
        </nav>
    )
}

export default NavBar
