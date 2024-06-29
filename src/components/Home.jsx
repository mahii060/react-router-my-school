/*eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { BeakerIcon, CheckCircleIcon, PaperAirplaneIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'

const Home = () => {
    return (
        <div className=''>
            <div className="my-5 text-center">
                <h1 className='text-7xl font-medium mb-5'>Education for better <span className='text-blue-600'>world</span></h1>
                <p className='text-lg my-3 lg:px-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo fugiat omnis similique nulla? Quibusdam quidem ullam odio dolore ipsam eius ipsum nostrum debitis. Consequuntur quod maiores harum rerum laborum sunt repellendus nobis velit! Soluta harum corporis, consequuntur sapiente autem quia laborum officia. Ratione ipsum pariatur porro eaque recusandae reiciendis quo.</p>
                <Link to="/about">
                    <button className='btn'>Read More</button>
                </Link>
            </div>
            <div className='md:flex gap-5 px-12 my-12'>
                <div className="group border border-gray-400 rounded text-center px-3 py-5 hover:bg-blue-500">
                    <div className="text-center inline-block p-4 border-2 border-blue-700 rounded-full group-hover:text-white">
                        <PaperAirplaneIcon className="size-10 text-blue-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-white">Progressive Program</h3>
                    <p className="group-hover:text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum iste accusamus consectetur quidem, velit quam error iusto officia rem.
                    </p>
                </div>
                <div className="group border border-gray-400 rounded text-center px-3 py-5 hover:bg-blue-500">
                    <div className="text-center inline-block p-4 border-2 border-blue-700 rounded-full group-hover:text-white">
                        <CheckCircleIcon className="size-10 text-blue-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-white">Online Education</h3>
                    <p className="group-hover:text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum iste accusamus consectetur quidem, velit quam error iusto officia rem.
                    </p>
                </div>
                <div className="group border border-gray-400 rounded text-center px-3 py-5 hover:bg-blue-500">
                    <div className="text-center inline-block p-4 border-2 border-blue-700 rounded-full group-hover:text-white">
                        <RocketLaunchIcon className="size-10 text-blue-500 group-hover:text-white" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-white">International Students</h3>
                    <p className="group-hover:text-white">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum iste accusamus consectetur quidem, velit quam error iusto officia rem.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;