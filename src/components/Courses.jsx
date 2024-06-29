/*eslint-disable */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='my-5'>
            <h1 className='text-3xl font-medium text-center'>Our Courses</h1>
            <p className='text-center text-base font-medium text-gray-500'>Our preschool program has five dedicated classes</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    courses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;