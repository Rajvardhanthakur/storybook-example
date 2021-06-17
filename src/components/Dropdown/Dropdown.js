import React from 'react';
import './Dropdown.css';

function Dropdown(props) {
    const { varient = 'medium', children, ...rest } = props
    return (
        <>
            <span className={`dropdown ${varient}`} >
                <select {...rest}>
                    {children}
                </select>
            </span>
        </>
    )
}

export default Dropdown
