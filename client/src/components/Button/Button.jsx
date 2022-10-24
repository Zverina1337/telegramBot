import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button {...props} className={'Button ' + props.className}/>
    );
}

export default Button;
