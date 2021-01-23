import React from 'react';
import './loginBtn.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

export const loginBtn = ({children, type, onClick, buttonStyle, buttonSize }) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle 
    : Styles [0];

    const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    return (
        <Link to='/login' className='btn-mobile'>
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        >
            {children}
        </button>
        </Link>
    );
};