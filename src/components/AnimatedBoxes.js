import React, { useEffect } from "react";
import styled from "styled-components";
import placeholder from '../assets/placeholder.png'
import Aos from "aos";
import 'aos/dist/aos.css';

const Container = styled.div`
display: flex;
margin: 2.5rem auto;
width: 90%;
border: 1px solid #d3d3d3;
//background-color: lightcyan;
//border-radius: 8px; 

.image-section{
    width: 50%;
}

.info-section{
    .heading{
        padding-bottom: 30px;
        border-bottom: 1px solid black;
        
    }
    p{
        padding-top: 30px;
    }
    width: 50%;
    text-align: left;
    padding-left: 10px;

}
`;


export default function AnimatedBox({aosMethod='zoom in', serviceName='This is a service', serviceDescription = 'This is a service description', flipped = false, img}) {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    if (flipped === false){

    return(
        
        <Container data-aos={aosMethod}>
            <img className="image-section" height={400} src={img} alt='img'/>

            <div className="info-section">
                <h1 className="heading">{serviceName}</h1>
                <p>{serviceDescription}</p>
            </div>

        </Container>
    )
    } else {

        return(
        
            <Container data-aos={aosMethod}>
    
                <div className="info-section">
                    <h1 className="heading">{serviceName}</h1>
                    <p>{serviceDescription}</p>
                </div>

                <img className="image-section" height={400} src={img} alt='img'/>
    
            </Container>
        )

    }

}