import React from 'react';
import Button from './Button';

export default {
    title: 'Button',
    component: Button
}

export const Primary = () => {
    return (
        <Button varient="primary">Primary</Button>
    )
}

export const Secondry = () => {
    return (
        <Button varient="secondry">Secondry</Button>
    )
}

export const Success = () => {
    return (
        <Button varient="success">Success</Button>
    )
}

export const Danger = () => {
    return (
        <Button varient="danger">Danger</Button>
    )
}