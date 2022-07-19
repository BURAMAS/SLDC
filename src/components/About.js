import React from "react";
import styled from "styled-components";
import Heading from "./Heading";
import greywave from '../assets/wave.svg' 
import placeholder from '../assets/placeholder.png'
import Button from "./Button";
import machine from '../assets/machines.jpg'
import about from '../assets/aboutus.svg'
import Box from "./Box";
import blob from '../assets/blob.svg'
import blue_wave from '../assets/blue_wave.svg'

const MainContainer = styled.div`

margin: -5px auto;
width: 100%;
height: 90vh;
justify-content: center;
align-items: center;
overflow-y: hidden;
background-color: #347deb;



.head{
    text-align: left;
    padding-left: 60px;
    padding-bottom: 30px;
    margin-top: -90px;
    color: white;

    .title{
        color: white;
    }
    h1{
        text-align: center;
        width: 100%;
        
        font-family: 'Roboto';
        font-size: 2.5rem;
        //font-weight: bolder;
        letter-spacing: 1.5px;
        color: black;
}
    }
    .caption{
        text-align: center;
        padding-top: 25px;
        width: 100%;
    }
}

@media only screen and (max-width: 768px) {
    MainContainer {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .caption{
        
    }
  }



`;

const Container = styled.div`
display: flex-start;
justify-content: center;
//align-items: center;
max-width: 1000px;
width: 90%;
margin: 0px auto;


.info-section{
    
    padding-left: 1rem;
    text-align: left;
    width: 100%;
    color: white;


    .desc{
        padding-bottom: 30px;
        text-align: center;
        margin: 0 auto;
    }


}

.image-section{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-left: 10px;
    border-radius: 8px;

    img{
        display: flex;
        margin: 0 10px;
        
    }

    .image_one{
            border-radius: 8px;
        }

    .image_two{
        border-radius: 8px;
    }

    .image_three{
        border-radius: 8px;
    }
    

}

.button{
    display: flex;
    
    padding-top: 1rem;
    margin: 0 auto;
  

}




`;

export default function About() {
    return(
        <MainContainer>
        <img src={blue_wave} alt="blue_wave"/>

        <div className="head">
            <h1 className="title">Learn More About Us</h1>
            <p className="caption">Some Information About Us</p>
        </div>
       
           
     
        <Container>
            

            <div className="info-section">
                <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    <div className='button'>
                    <Button  btnLink="/about-us" btnText="Learn More" color={false} border={false}/>
            </div>

            </div>
            <div className="image-section">

            <img className='image_one' src={placeholder} height ={250} width='50%' alt=''/>
            <img className='image_two' src={placeholder} height ={250} width='50%' alt=''/>
            <img className='image_three' src={placeholder} height ={250} width='50%' alt=''/>

            </div>
        </Container>
        
        </MainContainer>
    )
}