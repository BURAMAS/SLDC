import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import laundry from '../assets/LAUNDRY.jpg'

//convert image to svg and dill navebar and use color to fill svg
const Container = styled.div`
display: flex;
position: fixed;
background-color: white;
z-index: 5;
width: 100%;
align-items: center;
border-bottom: 1px solid #d3d3d3;

img{
    fill: blue;
}
`;
const NavBarStyle = styled.div`
position: fixed;
display: flex;
justify-content: right;
align-items: center;
width: 100%;
padding: 1rem 0;
z-index: 5;


    
    
}

li{
    display: inline-block;
  

    a{
        padding: 0 1.3rem;
        color: black;
        letter-spacing: 1.5px;
      
        &:hover{
            background-color: lightblue;
            transition: 1.5s ease;
        }
    }
}

`;

export default function NavBar() {
    return(
        <Container>
        <div className="logo">
        <img src={laundry} alt='logo' width={200} height={'auto'}/>
        </div>
        <NavBarStyle>

        <ul>
            <li>
                <NavLink to='/'>
                HOME
                </NavLink>
            </li>
            <li>
                <NavLink to='/about-us'>
                ABOUT
                </NavLink>
            </li>
            <li>
                <NavLink to='/contact-us'>
                CONTACT
                </NavLink>
            </li>
            <li>
                <NavLink to='/gallery'>
                GALLERY
                </NavLink>
            </li>
        </ul>
        </NavBarStyle>
        </Container>
    )
}