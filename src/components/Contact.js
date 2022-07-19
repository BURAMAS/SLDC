import React from "react";
import Button from "./Button";
import Heading from "./Heading";
import styled from "styled-components";
import grey_wave from '../assets/grey_wave.svg'
import blue_wave_lower from '../assets/blue_wave.svg'

const Container = styled.div`
width: 100%;
margin: 0 auto;
overflow-y: hidden;

img{
    margin-bottom: -15px;
}


.inner-container{
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    border: 1px solid #d3d3d3;
    border-radius: 8px;
}

`
export default function Contact() {
    return(
        <Container>
            <div className="inner-container">
            <Heading heading="Contact Us" subheading="Get In Touch"/>
            <Button btnLink="/contact-us" btnText="Contact Now"/>
            </div>
            <img src={blue_wave_lower} alt='bwave'/>
        </Container>
    )
}