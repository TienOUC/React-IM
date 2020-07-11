
import React from 'react'
import PropTypes from 'prop-types'
import StyledProfile, { SocialLinks, ContactSection, AlbumSection, AlbumTitle, Album, Photo, CloseIcon } from './style'
import Avatar from 'components/Avatar'
import 'styled-components/macro'
import avatarImg from 'assets/images/avatar.jpg'
import Paragraph from 'components/Paragraph'
import Emoji from 'components/Emoji'
import Icon from 'components/Icon'
import { faWeibo, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Seperator from 'components/Seperator'
import Text from 'components/Text'
import paper1 from 'assets/images/paper-1.jpg'
import paper2 from 'assets/images/paper-2.jpg'
import paper3 from 'assets/images/paper-3.jpg'
import {ReactComponent as Cross} from 'assets/icons/cross.svg'

function Profile ({ children, ...rest }) {
    return (
        <StyledProfile {...rest}>
            <CloseIcon icon={Cross}/>
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
                前端小白，努力让自己在前端的路上走的再远一些{' '}
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
            <Seperator
                css={`
                    margin: 30px 0;
                `}
            />
            <ContactSection>
                <Description label='联系电话'>+86 18612345667</Description>
                <Description label='电子邮件'>admin@gmail.com</Description>
                <Description label='个人网站'>https://www.baidu.com</Description>
            </ContactSection>
            <Seperator
                css={`
                    margin: 30px 0;
                `}
            />
            <AlbumSection>
                <AlbumTitle>
                    <Text type='secondary'>相册（31）</Text>
                    <a>查看全部</a>
                </AlbumTitle>
                <Album>
                    <Photo src={paper1} alt='' />
                    <Photo src={paper2} alt='' />
                    <Photo src={paper3} alt='' />
                </Album>
            </AlbumSection>
        </StyledProfile>
    )
}


function Description ({ label, children }) {
    return (
        <Paragraph>
            <Text type='secondary'>{label}: </Text>
            <Text>{children}</Text>
        </Paragraph>
    )
}

Profile.propTypes = {
    children: PropTypes.any
}

export default Profile


