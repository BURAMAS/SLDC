import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
padding: 1rem 0;

h1{
    font-family: 'Roboto';
    font-size: 2.5rem;
    font-weight: bolder;
    letter-spacing: 1.5px;
    color: black;
}
`;

export default function Heading({heading = 'This is the heading', subheading='This is the subheading'}) {
    return(
        <StyledHeading>
        <h1>{heading}</h1>
        <p>{subheading}</p>
        </StyledHeading>
    )
}