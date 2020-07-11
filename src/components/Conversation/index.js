import React from 'react'
import PropTypes from 'prop-types'
import StyledConversation, { Conversations, MyChatBubble } from './style'
import TitleBar from 'components/TitleBar'
import ChatBubble from 'components/ChatBubble'
import VoiceMessage from 'components/VoiceMessage'
import Emoji from 'components/Emoji'
import Footer from 'components/Footer'


function Conversation ({ children, ...rest }) {
    return (
        <StyledConversation {...rest}>
            <TitleBar />
            <Conversations>
                <ChatBubble time='昨天 下午14:26'> Hi, 小宇，忙什么呢？ </ChatBubble>
                <MyChatBubble time='昨天 下午14:28'> 忙着写Bug呢 </MyChatBubble>
                <ChatBubble time='昨天 下午14:38'>
                    <VoiceMessage time='01:15'/>
                </ChatBubble>
                <MyChatBubble time='昨天 下午14:42'>
                    本来是一个，改着改着多了4个
                     <Emoji label='smile'> 😂😂😂 </Emoji>
                </MyChatBubble>
            </Conversations>
            <Footer />
        </StyledConversation>
    )
}

Conversation.propTypes = {
    children: PropTypes.any
}

export default Conversation


