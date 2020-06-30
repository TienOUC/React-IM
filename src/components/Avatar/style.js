import styled from 'styled-components'

const StyledAvatar = styled.div`
    position: relative;
`

const StatusIcon = styled.div`
    position: absolute;
    left: 2px;
    top: 4px;

    &::before{
        content: '';
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #fff;
        transform: scale(2);
    }

    &::after{
        content: '';
        display: block;
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.green};
    }
`

const AvatarClip = styled.div`
    width: ${ ({ size }) => size};
    height: ${({ size }) => size};
    border-radius: 50%;
    overflow: hidden;
`

const AvatarImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position:center;
`
export default StyledAvatar
export { StatusIcon, AvatarClip, AvatarImage }
