import React from "react";
import SimpleSlider from "../components/SliderComp";
import styled from 'styled-components'
import Box from  '../components/Box'
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import Accordian from "../components/Accordian";
import tariq from '../assets/Tariq.jpg'
import placeholder from '../assets/placeholder.png'

const Container = styled.div`
margin: 100px auto;
width: 90%;
display: inline-block;
justify-content: center;
align-items: center;
height: 80vh;

.text{
    padding-top: 80px;
    width: 90%;
    margin: 0 auto;
    text-align: left;
}
`;


export default function AboutPage() {

    return(
        <>
        <Container>
        <SimpleSlider/>
        <div className="text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum</p>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum
            </p>
        </div>
        </Container>
        <Heading heading = 'Meet The Experts' subheading = 'The experts handling your clothing'/>
        <Box image ={placeholder}/>
        <Box flipped={false} name='Tariqs Dad'/>
        <Accordian/>
        <Footer/>
        </>
    )
}