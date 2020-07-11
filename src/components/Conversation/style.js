
import styled from 'styled-components'
import ChatBubble from 'components/ChatBubble'

const Conversations = styled.div`
    padding: 10px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    overflow: auto;
    flex: 1;

    & > *{
        margin: 10px 0;
    }
`

const MyChatBubble = styled(ChatBubble).attrs({ type: 'mine' })`
    align-self: flex-end;
    margin-right: 30px;
`

const StyledConversation = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    border: 1px solid ${({ theme }) => theme.gray4};
    
    & > *:last-child{
        align-self: end;
    }
`

export default StyledConversation
export { Conversations, MyChatBubble }
