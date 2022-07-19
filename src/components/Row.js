import React from "react";
import styled from 'styled-components';

const RowStyle = styled.div`
margin: 0 auto;
display: flex;
width: 90%;
overflow-y: hidden;

img{
    padding: 10px;
    &:hover{
        transform: scale(1.5)
    }
}

`

export default function Row({image_one, image_two, image_three}) {
    return(
    <RowStyle>
    <img src={image_one} alt = ''/>
    <img src={image_two} alt = ''/>
    <img src={image_three} alt = ''/>
    </RowStyle>
    )
    
}