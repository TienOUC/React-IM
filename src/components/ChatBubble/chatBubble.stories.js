
import React from 'react'
import ChatBubble from '.'

export default {
    title: 'UI组件/ ChatBubble',
    component: ChatBubble
}

export const FromOthers = () => {
    return <ChatBubble time='昨天 下午14:26'>这是一条其他人发送的聊天信息</ChatBubble>
}

export const Mine = () => {
    return <ChatBubble type='mine' time='昨天 下午14:26'>这是一条我发送的聊天信息</ChatBubble>
}
