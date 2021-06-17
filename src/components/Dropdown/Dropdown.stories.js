import React from 'react';
import Dropdown from './Dropdown';

export default {
    title: 'Select',
    component: Dropdown
}

export const medium = () => {
    return (
        <Dropdown varient="medium">
            <option>Option-1</option>
            <option>Option-2</option>
            <option>Option-3</option>
            <option>Option-4</option>
        </Dropdown>
    )
}

export const small = () => {
    return (
        <Dropdown varient="small">
            <option>Option-1</option>
            <option>Option-2</option>
            <option>Option-3</option>
            <option>Option-4</option>
        </Dropdown>
    )
}

export const big = () => {
    return (
        <Dropdown varient="big">
            <option>Option-1</option>
            <option>Option-2</option>
            <option>Option-3</option>
            <option>Option-4</option>
        </Dropdown>
    )
}