import React from 'react'
import PropTypes from 'prop-types'
import StyledBlockedList, { SettingsMenu, ClosableAvatar, BlockedAvatar, BlockedName, CloseIcon, FriendList, BackIcon } from './style'
import Icon from 'components/Icon'
import Text from 'components/Text'
import { ReactComponent as ArrowMenuLeft } from 'assets/icons/arrowMenuLeft.svg'
import 'styled-components/macro'
import avatarImg1 from 'assets/images/avatar-1.jpg'
import { ReactComponent as closeCircle } from 'assets/icons/closeCircle.svg'
import { useHistory } from 'react-router-dom'

function BlockedList ({ children, ...rest }) {
    const history = useHistory()

    return (
        <StyledBlockedList {...rest}>
            <SettingsMenu>
                <BackIcon onClick={() => history.goBack()}>
                    <Icon
                        icon={ArrowMenuLeft}
                        style={{ opacity: '0.5' }}
                    />
                </BackIcon>
                <Text size='xlarge'>已屏蔽的好友</Text>
            </SettingsMenu>
            <FriendList>
                {new Array(8).fill(0).map((_, i) => {
                    return (
                        <ClosableAvatar key={i}>
                            <BlockedAvatar size='105px' src={avatarImg1} />
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


