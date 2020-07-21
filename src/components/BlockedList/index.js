import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockedList, { SettingsMenu, ClosableAvatar, BlockedAvatar, BlockedName, CloseIcon, FriendList } from './style'
import Icon from 'components/Icon'
import Text from 'components/Text'
import { ReactComponent as ArrowMenuLeft } from 'assets/icons/arrowMenuLeft.svg'
import 'styled-components/macro'
import avatarImg from 'assets/images/avatar.jpg'
import { ReactComponent as closeCircle } from 'assets/icons/closeCircle.svg'

function BlockedList ({ children, ...rest }) {
    return (
        <StyledBlockedList {...rest}>
            <SettingsMenu>
                <Icon
                    icon={ArrowMenuLeft}
                    css={`
                        cursor: pointer;
                    `}
                />
                <Text size='xlarge'>已屏蔽的好友</Text>
            </SettingsMenu>
            <FriendList>
                {new Array(8).fill(0).map((_, i) => {
                    return (
                        <ClosableAvatar key={i}>
                            <BlockedAvatar size='105px' src={avatarImg} />
                            <CloseIcon width={46} height={51} icon={closeCircle} />
                            <BlockedName>楚中天</BlockedName>
                        </ClosableAvatar>
                    )
                })}
            </FriendList>
        </StyledBlockedList>
    )
}

BlockedList.propTypes = {
    children: PropTypes.any
}

export default BlockedList


