
import React from 'react'
// import PropTypes from 'prop-types'
import StyledNavBar, { StyledMenuItem, MenuIcon, MenuItems } from './style';
import Badge from 'components/Badge';
import Avatar from 'components/Avatar';
import avatarImg1 from 'assets/images/avatar-1.jpg'
import { faCommentDots, faUsers, faFolder, faCog, faEllipsisH, faStickyNote } from '@fortawesome/free-solid-svg-icons';
import 'styled-components/macro'

function NavBar ({ children, ...rest }) {
    return (
        <StyledNavBar {...rest}>
            <Avatar src={avatarImg1} status='online' />
            <MenuItems>
                <MenuItem showBadge active icon={faCommentDots} />
                <MenuItem icon={faUsers} />
                <MenuItem icon={faFolder} />
                <MenuItem icon={faStickyNote} />
                <MenuItem icon={faEllipsisH} />
                <MenuItem icon={faCog} css={`align-self: end;`}/>
            </MenuItems>
        </StyledNavBar>
    )
}

function MenuItem ({ icon, active, showBadge, ...rest }) {
    return (
        <StyledMenuItem active={active} {...rest}>
            <a href='#'>
                <Badge show={showBadge}>
                    <MenuIcon active={active}  icon={icon} />
                </Badge>
            </a>
        </StyledMenuItem>
    )
}

// NavBar.propTypes = {
//     children: PropTypes.any
// }

export default NavBar
export { MenuItem }

