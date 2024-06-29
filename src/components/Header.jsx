/*eslint-disable*/
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='md:flex items-center justify-center bg-blue-200 px-2 md:px-6 lg:px-16 py-6'>
            <div className=''>
                <Link to="/" className='text-2xl font-bold text-blue-700'>MySchool</Link>
                {/* <Link to="/" className='text-2xl font-bold text-blue-700'><img className='w-16 rounded-full' src="../../public/logo2.jpg" alt="Logo" /></Link> */}
            </div>
            <div className='ms-auto flex gap-4'>
                <NavLink to="/" className={({ isActive }) => `text-xl font-medium ${isActive ? "text-orange-400" : ""} `
                }>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => `text-xl font-medium ${isActive ? "text-orange-400" : ""} `
                }>About</NavLink>
                <NavLink to="/courses" className={({ isActive }) => `text-xl font-medium ${isActive ? "text-orange-400" : ""} `
                }>Courses</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `text-xl font-medium ${isActive ? "text-orange-400" : ""} `
                }>Contact</NavLink>
                {/* <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>Courses</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink> */}
            </div>
        </nav>
    );
};

export default Header;