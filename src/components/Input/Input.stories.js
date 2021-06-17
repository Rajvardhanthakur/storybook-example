import React from 'react';
import Input from './Input';

export default {
    title: 'Input',
    component: Input
}

export const small = () => {
    return (
        <Input size="small" placeholder="Small size input" />
    )
}

export const medium = () => {
    return (
        <Input size="medium" placeholder="Medium size placeholder" />
    )
}

export const large = () => {
    return (
        <Input size="large" placeholder="Large size placeholder" />
    )
}