import React from 'react'
import styled from 'styled-components'


const StyledButton = styled.div`
    width: ${props => props.width || '100px'};
    height: 50px;
    background-color: gray;
`


function Button (props) {
    return (
        <StyledButton width={props.width} onClick={props.onClick}>
            <button>{props.label}</button>
            {props.children}
        </StyledButton>
    )
}

export default Button
