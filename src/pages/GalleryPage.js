import React from "react";
import Row from "../components/Row";
import placeholder from '../assets/placeholder.png'
import Heading from "../components/Heading";
import styled from "styled-components";
import Footer from "../components/Footer";

const GalleryStyle = styled.div`
margin-top: 100px;
height: 100vh;
`
export default function Gallery() {
    return(
    <>
    <GalleryStyle>
    <Heading heading="Gallery" subheading="Have a look at our store"/>
    <Row image_one={placeholder} image_two={placeholder} image_three={placeholder}/>
    <Row image_one={placeholder} image_two={placeholder} image_three={placeholder}/>
    <Row image_one={placeholder} image_two={placeholder} image_three={placeholder}/>
    <Row image_one={placeholder} image_two={placeholder} image_three={placeholder}/>
    <Row image_one={placeholder} image_two={placeholder} image_three={placeholder}/>
    </GalleryStyle>
    <Footer/>
    </>
    )
}