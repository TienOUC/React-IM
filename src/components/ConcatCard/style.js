import styled from 'styled-components'
import Paragraph from 'components/Paragraph'
import StyledAvatar from 'components/Avatar/style'
import { card } from 'utils/mixins'

const Name = styled(Paragraph).attrs({ size: 'large' })`
    grid-area: name;
`

const Intro = styled(Paragraph).attrs({ size: 'small',type: 'secondary' })`
    grid-area: intro;
`

const StyledConcatCard = styled.div`
    ${card()}
    display: grid;
    grid-template-areas: 
        'avatar name'
        'avatar intro';
    grid-template-columns: 62px auto;
     ${StyledAvatar}{
         grid-area: avatar;
     }
`

export default StyledConcatCard
export { Name, Intro }
