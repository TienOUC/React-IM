import styled from 'styled-components'
import Button from 'components/Button'
import Avatar from 'components/Avatar'

const Actions = styled.div`
    grid-area: actions / title;
    align-self: end;
    justify-self: center;

    display: grid;
    grid-template-columns: 90px 90px 90px;
`

const Action = styled(Button).attrs({ size: '64px' })`
    font-size: 32px;
    color: #fff;
    box-shadow: none;
    background-color: ${({ theme, type }) => type === 'hangoff' ? theme.red2 : theme.grayDark2}
`

const Self = styled(Avatar)`
    grid-area: self;
    align-self: end;
    justify-self: end;
`

const Minimize = styled(Button)`
    grid-area: title;
    justify-self: end;
    background-color: ${({ theme }) => theme.gray3};
    padding: 0;
    width: 62px;
    height: 62px;
    font-size: 46px;
`

const StyledVedioCall = styled.div`
    height: 100%;
    padding: 20px;
    padding-bottom: 40px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    
    display: grid;
    grid-template-areas: 
        'title title'
        'actions self';
`

export default StyledVedioCall
export { Actions, Action, Self, Minimize }
