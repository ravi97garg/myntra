import styled from 'styled-components';

export const Searchbar = styled.div`
    background-color: #f3f3f3;
    border-radius: 3px;
    display: inline-block;
    border: 1px solid transparent;
    margin: 0 20px;

    :focus-within{
        border: 1px solid #ccc;
        background-color: #fff;
    }
    
    span {
        background-color: inherit;
        padding: 10px;
        border: none;
        display: inline-block;
        vertical-align: middle;
        background: url('https://assets.myntassets.com/assets/images/retaillabs/2019/2/20/9f612eb6-1870-410c-bd7d-57ca7ba769c21550685418928-MyntraWeb-Sprite.png') no-repeat -1509px -1px;
        width: 45px;
        height: 45px;
        transform: scale(0.35);
    }

    input{
        background-color: inherit;
        padding: 10px;
        border: none;
        display: inline-block;
        vertical-align: middle;
        width: 300px;
        font-size: 12px;
    }
    
    input:focus {
        outline: none;
    }
`