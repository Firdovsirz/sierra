import React from 'react';
import '../DescSection/DescSection.css';

export default function DescSection({ mainTextChange, descTextChange }) {
    let mainText = '';
    let descText = '';
    const updateText = (main, desc) => {
        mainText += main;
        descText += desc;
    }
    updateText(mainTextChange, descTextChange);
    return (
        <>
            <section className='main-desc-section'>
                <div className='desc-container'>
                    <h1 className='main-text'>{mainText}</h1>
                    <p className='desc-text'>{descText}</p>
                    <div className='line'></div>
                </div>
            </section>
        </>
    )
}
