
import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { SocialLinks } from './style'
import Avatar from 'components/Avatar'
import 'styled-components/macro'
import avatarImg from 'assets/images/avatar.jpg'
import Paragraph from 'components/Paragraph'
import Emoji from 'components/Emoji'
import Icon from 'components/Icon'
import { faWeibo, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Profile ({ children, ...rest }) {
    return (
        <StyledProfile {...rest}>
            <Avatar
                css={`
                margin: 26px 0;
                `}
                src={avatarImg}
                size='160px'
                status='online'
                statusIconSize='25px'
            />
            <Paragraph
                size='xlarge'
                css={`
                    margin-bottom: 12px;
                `}
            >
                徐凤年
            </Paragraph>
            <Paragraph
                size='medium'
                type='secondary'
                css={`
                    margin-bottom: 12px;
                `}
            >
                北京市 海淀区
            </Paragraph>
            <Paragraph
                css={`
                    margin-bottom: 26px;
                `}
            >
                前段小白，努力让自己在前段的路上走的再远一些{' '}
                <Emoji label='fist'> ✊ </Emoji>
            </Paragraph>
            <SocialLinks>
                <Icon.Socail
                    icon={faWeibo}
                    bgColor='#f06767'
                    href='http://www.weibo.com'
                />
                <Icon.Socail
                    icon={faGithub}
                    bgColor='#000000'
                />
                <Icon.Socail
                    icon={faLinkedin}
                    bgColor='#2483c0'
                />
            </SocialLinks>
        </StyledProfile>
    )
}

Profile.propTypes = {
    children: PropTypes.any
}

export default Profile


