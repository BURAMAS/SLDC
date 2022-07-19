import React from 'react';
import { FiPhone, FiMail, FiMapPin} from 'react-icons/fi'
import styled from 'styled-components';

const ItemStyle = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: lightgrey;
width: 90%;
margin: 20px auto;
border-radius: 8px;

.icon{
    padding: 1.3rem;
}



svg{
    size: 50;
}
`

    export default function ContactItem({size = 30 ,icon = <FiMapPin size={size}/>, desc='This is info'}) {
    return(
        <ItemStyle>
        <div className='icon'>
            {icon}
        </div>
        <div className='text'>
            {desc}
        </div>
        </ItemStyle>
    )

}