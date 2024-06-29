/*eslint-disable */
import React from 'react';

const Course = ({ course }) => {
    const { id, name, description, duration, seats, image } = course
    return (
        <div className='border border-gray-400 rounded text-center p-4 mx-5'>
            <img className='w-full h-72 object-cover rounded' src={image} alt="" />
            <h1 className='text-3xl'>{name}</h1>
            <div className='flex flex-col text-left justify-between my-3'>
                <p>Duration: {duration}</p>
                <p>Sit available: {seats}</p>
            </div>
            <p className='text-gray-700 text-left'>{description}</p>
            <button className='border border-gray-500 px-4 py-2 hover:text-orange-400 hover:border-orange-400 my-3'>Read More</button>
        </div>
    );
};

export default Course;