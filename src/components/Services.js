import React from "react";
import Heading from "./Heading";
import wave from '../assets/wave_2.svg';
import AnimatedBox from "./AnimatedBoxes";
import styled from "styled-components";
import artsymachine from '../assets/artsymachine.jpg'
import clothes from '../assets/clothes.jpg'
import reflect from '../assets/reflect.jpg'
import blue_wave from '../assets/blue_wave_down.svg'
import blue_wave_down from '../assets/blue_wave_down.svg'
 

const Container = styled.div`
width: 100%;
margin: 0 auto;

img{
    margin-top: -90px;
}

.heading {
    padding-top: 50px;
    text-align: left;
    padding-left: 60px;
    padding-bottom: 15px;
}

.head{
    font-family: 'Roboto';
    font-size: 2.5rem;
    font-weight: bolder;
    letter-spacing: 1.5px;
    color: black;
    padding-bottom: 2rem;
}

.subhead{
    
    width: 50%;
}
`;


export default function Services() {
    return(
        <Container>
        <img src={blue_wave_down} alt='bwave'/>
        <div className="heading">
            <h1 className="head">Services </h1>
            <p className="subhead">Some of the services we offer</p>
        </div>
        <AnimatedBox aosMethod="slide-right" serviceName='Express Cleaning' serviceDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' img={artsymachine}/>
        <AnimatedBox aosMethod="slide-left" flipped serviceName="Laundry Service" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" img={clothes}/>
        <AnimatedBox aosMethod="zoom-in" serviceName='Repairs & Alterations' serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" img={reflect}/>
        
        </Container>
       
    )
}