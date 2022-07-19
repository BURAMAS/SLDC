import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ButtonStyle = styled.button`
position: relative;
z-index: 2;
background-color: transparent;
border: ${(props) => (props.border ? '1px solid black' : '1px solid white')};
//border: 1px solid black;
padding: 1rem 2rem;
text-transform: uppercase;
letter-spacing: 1.3px;
margin: 0rem auto;
margin-bottom: 1rem;

&:hover{
    background-color: lightcyan;
}
a{
    color: ${(props)=> (props.color ? 'black' : 'white')};
}
`;

export default function Button({
    btnLink = '/test', 
    btnText = 'test',
    color = true,
    border= true,
    }) {
    return(
        <ButtonStyle color={color} border={border}>
        <Link to={btnLink}>
            {btnText}
        </Link>
        </ButtonStyle>
    )
    
}