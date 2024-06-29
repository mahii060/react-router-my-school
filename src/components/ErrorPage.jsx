/*eslint-disable */
import { FaceFrownIcon } from '@heroicons/react/24/solid';
import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='flex flex-col items-center'>
                <FaceFrownIcon className='size-24 text-gray-600' />
                <h1 className='text-5xl font-semibold text-gray-600 text-center'>404</h1>
                <h3 className='text-3xl font-bold text-gray-600 text-center'>Page not found</h3>
                <p className='text-lg font-medium text-gray-600 text-center'><small>The page you are looking for doesn't exist or an other error occurred.</small></p>
            </div>
        </div>
    );
};

export default ErrorPage;