import styled from 'styled-components';

export const StyledTopCorner = styled.ul`
    padding: 0;
    margin: 0;
    margin-left: 16px;
    display: inline-block;
    
    li{
        display: inline-block;
        vertical-align: middle;
        padding: 0 10px;
    }
    `

export const IconImage = styled.span`
    background: ${props => `url('https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png') no-repeat ${props.icon.offsetX} ${props.icon.offsetY}`};
	width: ${props=>props.icon.width};
	height: ${props=>props.icon.height};
	display: block;
	transform: scale(0.55);
	padding: 0 8px;
	margin: 3px auto;
	`
export const IconText = styled.span`
    font-size: 12px;
	font-weight: bold;
	display: block;
	text-align:center;
	`