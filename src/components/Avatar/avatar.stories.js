import React from 'react'
import Avatar from '.';
import avatarImg from '../../assets/images/avatar.jpg'

export default {
    title: 'Avatar',
    component: Avatar
}

export const Default = () => {
    return <Avatar src={avatarImg} />
}

export const Size = () => {
    return (
        <div>
            <div><Avatar src={avatarImg} size='48px' /></div>
            <div><Avatar src={avatarImg} size='56px' /></div>
            <div><Avatar src={avatarImg} size='64px' /></div>
            <div><Avatar src={avatarImg} size='72px' /></div>
        </div>
    )
}
