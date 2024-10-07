import React, { useState } from 'react';

const Toggle = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    const toggleState = () => {
        setIsActive(!isActive);
    };

    return (
        <div className='t-item'>
            <button className="accordion-header" onClick={toggleState}>
                {title}
                <span>{isActive ? '▲' : '▼'}</span>
            </button>
            <div className={`accordion-content ${isActive ? 'active' : ''}`}>
                {isActive && <p>{content}</p>}
            </div>
        </div>
    );
};

export default Toggle;
