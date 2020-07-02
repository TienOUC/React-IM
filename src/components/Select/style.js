import styled from 'styled-components'
import CaretDown from 'assets/icons/caret_down.svg'

const StyledSelect = styled.select`
    appearance: none;
    ::-ms-expand{
        display: none;
    };

    background-image: url(${CaretDown});
    background-repeat: no-repeat;
    background-position: right center;
    background-color: transparent;
    border: none;
    outline: none;
    padding-right: 14px;
    font-size: ${({ theme }) => theme.normal};
    color: ${({ theme})=>theme.grayDark};
`

export default StyledSelect 

