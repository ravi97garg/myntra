import styled from 'styled-components';

export const HotDealsWrapper = styled.ul`
display: flex;
justify-content: space-evenly;
align-content: center;
`

export const Deal = styled.li`
display: flex;
background: ${props =>`linear-gradient(to right, #000, transparent) no-repeat, url(${props.image})`};
background-size: cover;
flex-basis: 20%;
height: 171px;
font-size: 20px;
color: #fff;
line-height: 24px;
flex-direction: column;
justify-content: space-around;
padding: 0 18px;
`;

export const Header = styled.h6`
margin: 5px;
padding: 0;
font-size: 10px;
font-weight: lighter; 
border-bottom: 1px solid white;
width: fit-content;
`

export const Message = styled.p`
text-transform: capitalize;
`

export const Footer = styled.h6`
margin: 0;
padding: 0;
font-size: 10px;
font-weight: lighter; 


`
