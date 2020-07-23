import styled from 'styled-components'

const Nav = styled.nav`
    flex-shrink: 0;
`

const Sidebar = styled.aside`
    max-width: 448px;
    min-width: 348px;
    height: 100vh;
    flex: 1;
    background-color: ${({ theme }) => theme.grediantGray};
`

const Content = styled.main`
    flex: 2;
    min-width: 410px;
    position: relative;
`

const Drawer = styled.div`
    max-width: 310px;
`

const StyledChatApp = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
`

export default StyledChatApp
export { Nav, Sidebar, Content, Drawer }
