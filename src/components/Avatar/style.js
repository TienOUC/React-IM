import styled, { css } from 'styled-components'

const circleMixinFn = (color, size = '8px') => css`
    content: '';
    display: block;
    position: absolute;
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: ${color};

`

const StyledAvatar = styled.div`
    position: relative;
`

const StatusIcon = styled.div`
    position: absolute;
    left: 2px;
    top: 4px;

    &::before{
        ${({ size }) => circleMixinFn('#fff')};
        transform: scale(2);
    }

    &::after{
        ${({ theme, status, size }) => {
        if (status === 'online') {
            return circleMixinFn(theme.green, size);
        } else if (status === 'offline') {
            return circleMixinFn(theme.gray, size);
        }
    }};
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
