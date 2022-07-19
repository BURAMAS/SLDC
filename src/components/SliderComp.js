import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import placeholder from '../assets/placeholder.png'
import styled from 'styled-components'
import Heading from './Heading'
import machine from '../assets/artsymachine.jpg'
import machine_two from '../assets/machines.jpg'
import tumble from '../assets/tumble.jpg'
import front from '../assets/front_two.jpg'
import fold from '../assets/fold.jpg'

const SliderStyle = styled.div`
width: auto;


//margin: 0 auto;



img{
  width: 100%;
  margin: 0 auto;
  height: 350px;
  width: 90%;
  
}
`;

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 500,
      arrows: true,
      autoplay: true,
      //responsive
      adaptiveHeight: true
    };
    return (
      <SliderStyle>
      <div>
        <Heading heading="About Us" subheading="Learn more about us"/>
        <Slider {...settings}>
   
          <div>
            <img src={machine} alt=''/>
          </div>
          <div>
          <img src={machine_two} alt=''/>
          </div>
          <div>
          <img src={tumble} alt=''/>
          </div>
          <div>
          <img src={front} alt=''/>
          </div>
          <div>
          <img src={fold} alt=''/>
          </div>
          
        </Slider>
      </div>
      </SliderStyle>
    );
  }
}