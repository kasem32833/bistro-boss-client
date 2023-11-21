import React from 'react';

const SectionTitle = ({heading, subHeadign}) => {
    return (
        <div className='w-4/12 text-center mx-auto my-10'>
            <p className='text-yellow-500'>---{subHeadign}---</p>
            <h3 className='text-3xl uppercase border-y-4'>{heading }</h3>
        </div>
    );
};

export default SectionTitle;