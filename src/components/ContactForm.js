import React from 'react'
import styled from 'styled-components'

const FormStyle = styled.div`
display: flex;
//justify-content: center;

width: 100%;

.label-name{
    text-align: left;
}

.label-email{
    text-align: left;
}

.label-message{
    text-align: left;
}

.form-container{
    padding-left: 10px;
}
textarea{
    resize: none;
    border-radius: 8px;
    border: 0.5px solid black;
    //margin-left: -170px;
    width: 100%;
}

input{
    padding: 20px;
    margin: 10px auto;
    border: 0.5px solid black;
    border-radius: 8px;
    width: 400px
    
   
}

.button{
    background-color: transparent;
    cursor: pointer;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    &:hover{
        background-color: lightcyan;
    }
}


`;

export default function ContactForm() {
    return(
        <FormStyle>
        <form>
            <div className='form-container'>
            <div className='label-name'>
            <label>Name:</label>
            </div>
            <br></br>
            <input type='text' name='name' placeholder='Your Name...'/>
            
            <br></br>
            <br></br>
            <div className='label-email'>
            <label>Email:</label>
            </div>
            <br></br>
            <input type='email' name='user_email' placeholder='Your Email...'/>
            

            <br></br>
            <br></br>

            <div className='label-message'>
            <label>Message:</label>
            </div>
            <br></br>
            <textarea name='message' rows={4} placeholder='Your Message...'/>
            

            <br></br>
            <br></br>

            <input type='submit' value='Send' className='button'/>
            

            </div>
        </form>
        </FormStyle>
    )
}