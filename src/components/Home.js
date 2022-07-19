import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import front from '../assets/front_side.jpg'
import Button from "./Button";
import About from "./About";
import Services from "./Services";
import Contact from './Contact';
import ContactItem from "./ContactItem";
import Footer from "./Footer";
import blob from '../assets/blob.svg'
//import background from '../assets/bg.jpg'
import laundry_pixel from '../assets/laundry_pixel.jpg'
import blue_wave from '../assets/blue_wave.svg'

const Wrap = styled.div`
width: 100%;

`

const Container = styled.div`
width: 100%;
padding-top: 5rem;
margin: 0px 0;
height: 80vh;
overflow-y: hidden;
display: flex;

;

.bwave{
   
}

.left-side{
    width: 50%;
}

.right-side{
    width: 50%;
}

.header{
    position: absolute;
    margin: 40% auto;
    font-weight: 1000;
    font-size: 1.5rem;
    width: 100%;
}

.pix{
    padding-top: 8em;
    width: 80%;
}

.home_title{
    width: 100%;
    padding-top: 5em;
    padding-bottom: 2.5rem;
    font-family: 'Roboto';
    font-size: 2rem;
    font-weight: bolder;
    letter-spacing: 1.5px;
    color: black;
}

.desc{
    padding-bottom: 5rem;
}



.header-image{
    margin-top: -80px;
    opacity: 0.5;
    width: 90%;
    height: 85vh;
    
    
}

.button{
    margin: 0 auto;

}
`;

export default function Home() {
    return(
        <Wrap>
        <Container>
        <div className="left-side">
        <h1 className="home_title">STEPNEY LAUNDRY & DRY CLEAN </h1>
        <p className="desc">Your Local Tower Hamlets Laundry</p>
        <Button btnLink="/book-now" btnText="Book A Collection"/>
        </div>
        <div className="right-side">
        <img  className='pix' src={laundry_pixel} alt ='pix-img'/>
        </div>
        
        {/*<Heading heading="STEPNEY LAUNDRY & DRY CLEAN" subheading="Your Local Tower Hamlets Laundry"/>*/}
        {/*<img className='header-image' src={front} alt='img'/>*/}
        </Container>
        <img  className='bwave' src={blue_wave} alt='bwave'/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
        </Wrap>
    )
}