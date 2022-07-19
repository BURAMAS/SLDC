import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import greywave from '../assets/wave.svg' 
import placeholder from '../assets/placeholder.png'
import Button from "./Button";


const MainContainer = styled.div`
margin: 50px auto;
width: 100%;
height:auto;

padding-bottom: 2rem;


`;

const Container = styled.div`
display: flex;
justify-content: center;
//align-items: center;
max-width: 1000px;
width: 90%;
margin: 0 auto;


.info-section{
    padding: 1rem;
    text-align: left;
    width: 50%;
}

.image-section{
    padding: 1rem;
    border-radius: 8px;
    width: 50%;
    height: 300px;
}

.button{
    padding-top: 1rem;
}

`;

export default function Box({ flipped= 'false', name = 'Tariq Hussain', desc= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', image={placeholder}}) {

    if (flipped === false) {
    return(
        <MainContainer>
        <Container>

            <img className='image-section' src={placeholder} alt='place' />
            

            <div className="info-section">
                <h1>{name}</h1>
                <br></br>
                <p>{desc}</p>
            </div>
        </Container>
        </MainContainer>
    )
    }else {
    
        return(
            <MainContainer>
            <Container> 
    
                <div className="info-section">
                    <h1>{name}</h1>
                    <br></br>
                    <p>{desc}</p>
                </div>

                <img className='image-section' src={image} alt='place' />
            </Container>
            </MainContainer>
        )

    }
}