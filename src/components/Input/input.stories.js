import React from 'react'
import Input from '.';
import Icon from 'components/Icon';
import { ReactComponent as ClipIcon } from 'assets/icons/clip.svg'
import { ReactComponent as PlanIcon } from 'assets/icons/plane.svg'

export default {
    title: 'UI组件/ Input',
    component: Input
}

export const Default = () => {
    return <Input />
}

export const Search = () => {
    return <Input.Search />
}

export const WithAffix = () => {
    return (
        <div>
            <Input
                prefix={<Icon icon={ClipIcon} color='#ccc' />}
                suffix={<Icon icon={PlanIcon} color='#ccc' />}
            />
        </div>
    )
}

export const InputTextWithLabel = () => {
    return <Input.Text label='Name' />
}

export const InputTextWithoutLabel = () => {
    return <Input.Text />
}
