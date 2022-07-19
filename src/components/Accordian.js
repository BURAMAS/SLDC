import React from 'react'
import { Data } from './Data';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai';
import Heading from './Heading';
import { useState } from 'react';

const AccordianSection = styled.div`
display: flex ;
justify-content: center;

`;

const Container = styled.div`
display: inline-block;

`;

const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;


margin: 30px auto;

h1{
    font-size: 1.6rem;
    font-weight: lighter;
}

span{
    padding-left: 10px;
}
`

const DropDown = styled.div`
`

const Accordian = () => {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked ===index){
            return setClicked(null)
        }else{
            setClicked(index)
        }
    }
  return (
      <>
      <Heading heading="FAQ's" subheading='Some of the questions our customers are asking'/>
    <AccordianSection>
        <Container>
            {Data.map((item, index) => {
                return (
                    <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <AiOutlineMinus/> : <AiOutlinePlus/> }</span>
                    </Wrap>
                    {clicked === index ?(

                    <DropDown>
                    <p>{item.answer}</p>
                    </DropDown>
                     ): null}
                    </>
                );
            })}
        </Container>
    </AccordianSection>
    </>
  )
}

export default Accordian