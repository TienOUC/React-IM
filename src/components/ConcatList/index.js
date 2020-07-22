
import React from 'react'
import PropTypes from 'prop-types'
import StyledConcatList, { Contacts } from './style'
import FilterList from 'components/FilterList'
import ConcatCard from 'components/ConcatCard'

function ConcatList ({ children, ...rest }) {
    return (
        <StyledConcatList {...rest}>
            <FilterList
                options={['新添加优先', '按姓名排序']}
                actionLabel ='添加好友'
            >
                <Contacts>
                    {new Array(10).fill(0).map((_, i) => (
                        <ConcatCard key={i} />
                    ))}
                </Contacts>
            </FilterList>
            {children}
        </StyledConcatList>
    )
}

ConcatList.propTypes = {
    children: PropTypes.any
}

export default ConcatList


