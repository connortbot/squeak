import React from 'react';
import './NextPreviousButton.css';
import rightArrow from '../assets/vectors/rightArrow.svg';
import leftArrow from '../assets/vectors/leftArrow.svg';

const NextPreviousButton = ({ direction }) => {
    const isNext = direction === 'next';
    const buttonText = isNext ? 'Next' : 'Previous';
    const icon = isNext ? rightArrow : leftArrow;

    return (
        <button className={`next-previous-button ${isNext ? 'next' : 'previous'}`}>
            {!isNext && <img src={icon} alt="Left Arrow" className="button-icon" />}
            <span>{buttonText}</span>
            {isNext && <img src={icon} alt="Right Arrow" className="button-icon" />}
        </button>
    );
};

export default NextPreviousButton;
