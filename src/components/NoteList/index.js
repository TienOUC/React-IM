
import React from 'react'
import PropTypes from 'prop-types'
import StyledNoteList, { Notes } from './style'
import FilterList from 'components/FilterList'
import NoteCard from 'components/NoteCard'

function NoteList ({ children, ...rest }) {
    return (
        <StyledNoteList {...rest}>
            <FilterList
                options={['最新笔记优先', '发布时间排序']}
                actionLabel='添加笔记'
            >
                <Notes>
                    {new Array(10).fill(0).map((_, i) => (
                        <NoteCard key={i} />
                    ))}
                </Notes>
            </FilterList>
            {children}
        </StyledNoteList>
    )
}

NoteList.propTypes = {
    children: PropTypes.any
}

export default NoteList


