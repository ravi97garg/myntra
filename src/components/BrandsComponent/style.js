import styled from 'styled-components';
import {Footer} from "../HotDealsComponent/style";

export const BrandsWrapper = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
`

export const BrandCard = styled.div`
display: flex;
flex-basis: 250px;
min-height: 330px;
background: ${props=>`url(${props.image}) no-repeat`};
margin-bottom: 30px;
flex-direction: column;
justify-content: flex-end;
align-items: center;
margin: 20px;
`

export const ImageCaption = styled.div`
width: 80%;
background-color: white;

`
export const BrandTitle = styled.div`
text-align: center;
font-weight: bold;
font-size: 16px;
text-transform: uppercase;
padding: 10px;
`
export const BrandDesc = styled.div`
text-align: center;
font-size: 14px;
text-transform: capitalize;
padding: 6px;
line-height: 20px;
`
export const BrandFooter = styled(Footer)`
text-align: center;
color: #444;
align-self: center;
`