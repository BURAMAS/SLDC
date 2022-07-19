import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Heading from "../components/Heading";

const Container = styled.div`
margin-top: 100px;
`

const Options = styled.div`
display: flex;
margin: 0 100px;



a{
    color: black;
}

.commercial-nav{
    padding: 0 20px;
    border-bottom: 2px solid lightblue;
 
}
`
const FormStyle = styled.div`
display: flex;
margin: 40px 100px;

input{
    display: flex;
    padding: 20px;
    margin: 0 auto;
    border: 0.5px solid black;
    border-radius: 8px;
    width: 400px
}

select{
    display: flex;
    padding: 10px;
}

.name-label{
    text-align: left;
}

.address-label{
    text-align: left;
}

.telephone-label{
    text-align: left;
}

.delivery-label{
    text-align: left;
}

.collected-label{
    text-align: left;
}

.button{
    background-color: lightblue;
    cursor: pointer;
}

.occupation-label{
    text-align: left;
}

.button{
    background-color: transparent;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    &:hover{
        background-color: lightcyan;
    }
}


`

export default function BookPage() {
    return(
        <Container>
            <Heading heading="Bookings" subheading="Book a collection for your clothing"/>
        
        <Options>
        <div className="personal-nav">
        <NavLink to='/book-now'>Personal</NavLink>
        </div>
        <div className="commercial-nav">
        <NavLink to='/commercial'>Commerical</NavLink>
        </div>
        </Options>
        <FormStyle>
            <form>

                <div className="name-label">
                <label>Name:</label>
                </div>

                <br></br>
                <input type='text' name='name' placeholder='Your Name...'/>

                <br></br>
                <br></br>

                <div className="address-label">
                <label>Address:</label>
                </div>
                <input type='text' name='address' placeholder='Your Address..'/>

                <br></br>
                <br></br>

                <div className="occupation-label">
                <label>Occupation:</label>
                </div>

                <br></br>

                <select name='occupations' id='oc'>
                <option value="" disabled selected hidden>Please Choose...</option>
                    <option value='hotel'>Hotels</option>
                    <option value='sports'>Sports Team</option>
                    <option value='restaurant'>Restaurant</option>
                    <option value='other'>Other</option>
                </select>

                <br></br>
                <br></br>

                <div className="telephone-label">
                <label>Telephone No.:</label>
                </div>
                <input type='text' name='telephone' placeholder='Your Number ...'/>

                <br></br>
                <br></br>

                <div className="delivery-label">
                <label>Delivered For:</label>
                </div>
                <input type='text' name='deliverfor' placeholder='Recipient...'/>

                <br></br>
                <br></br>

                <div className="collected-label">
                <label>Collected For:</label>
                </div>
                <input type='text' name='collectedfor' placeholder='Your Name...'/>

                <br></br>

                <input type='submit' value='Send' className='button'/>

            </form>
        </FormStyle>
        </Container>
    )
}