import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 16px 40px;
    padding-right: 20px;
    -webkit-box-shadow: 0px 3px 5px 0px rgba(150,150,150,0.75);
    -moz-box-shadow: 0px 3px 5px 0px rgba(150,150,150,0.75);
    -box-shadow: 0px 3px 5px 0px rgba(150,150,150,0.75);
    position: sticky;
    
    :after{
    content: '';
    display: block;
    clear:both;
    };
    
    :before{
    content: '';
    display: block;
    clear:both;
    };

    `

export const LeftWrapper = styled.div`
    float: left;   
    `

export const RightWrapper = styled.div`
    float: right;   
    `