import { styled } from "styled-components";

export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #FFF'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(to bottom, #fe7e5d, #ff6378)' : 'transparent'} ;
    font-size: 16px;
    color: #FFF;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        opacity: 0.8;
        transition: 0.5s;
        background-color: ${props => props.theme === 'primary' ? '' : '#FFF'};
        color: ${props => props.theme == 'primary' ? '' : '#181f36'}
    }

    &:active {
        opacity: 0.6;
        transition: 0.5;
    } 
`