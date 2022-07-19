import React from 'react';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';
import ContactItem from '../components/ContactItem';
import Footer from '../components/Footer';
import Heading from '../components/Heading';
import blue_wave from '../assets/blue_wave.svg'

const ContactPageStyle = styled.div`
.head{
    margin-top: 80px
}

img{
    margin-bottom: -20px;
}
`


const Container = styled.div`
display: flex;
width: 90%;
margin: 65px auto;

.details{
    width: 50%;
    //margin: 20px 0;
    border-right: 1px solid black;
}

.form{
    margin-top: 20px;
    width: 50%;

}
`;

export default function ContactPage() {
    return(
        <ContactPageStyle>
        <div className='head'>
        <Heading heading='Contact Us' subheading='Get In Touch'/>
        </div>
        <Container>
        

        <div className='details'>
        <ContactItem size={40} icon={<FiPhone/>} desc='02037299007' />
        <ContactItem size={40} icon={<FiMail/>} desc='@gmail.com' />
        <ContactItem size={40} icon={<FiMapPin/>} desc='102 White Horse Lane London E1 4LR' />
        </div>

        <div className='form'>
            <ContactForm/>
        </div>

        </Container>
        <img src={blue_wave} alt =''/>
        <Footer/>
        </ContactPageStyle>
    )
}