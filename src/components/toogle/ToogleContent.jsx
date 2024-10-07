import React from 'react';
import Toggle from './Toggle';
import  './toggle.css';

const ToggleContent = () => {
    const toggleData = [
        {
            title: 'What is Interior Design?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'What is Exterior Decoration?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: '3D Rendering Models',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    ];

    return (
        <div className='toggle'>
            {toggleData.map((item, index) => (
                <Toggle key={index} title={item.title} content={item.content} />
            ))}
        </div>
    );
};

export default ToggleContent;
