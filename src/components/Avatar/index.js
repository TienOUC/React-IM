import React from 'react'
// import PropTypes from 'prop-types'
import avatarImg from '../../assets/images/avatar.jpg'
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from './style';

function Avatar ({
    src,
    size = '48px',
    status,
    statusIconSize = '8px'
}) {
    return (
        <StyledAvatar>
            {status && <StatusIcon status={status} size={statusIconSize}></StatusIcon>}
            <AvatarClip size={size}>
                <AvatarImage src={avatarImg} />
            </AvatarClip>
        </StyledAvatar>
    )
}

// Avatar.propTypes = {

// }

export default Avatar


