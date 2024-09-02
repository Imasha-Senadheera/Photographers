import React, { useState } from 'react'
import { MdSearch } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import logo from '../../Assests/logo.png'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const [isLogged, setSsLogged] = useState(localStorage.getItem('isLogged') || false);
    const navigate = useNavigate();

    const loginLogoutHandler = () => {
        if (!isLogged) {
            localStorage.setItem('isLogged', true);
            setSsLogged(true);
            navigate('/dashboard');
        } else {
            localStorage.removeItem('isLogged');
            setSsLogged(false);
            navigate('/');
        }
    }
    return (
        <div className='flex  bg-black text-white py-3 px-5 justify-center'>
            <div className='flex justify-start w-[30%]'>
                <img src={logo} alt='logo' className='w-14 h-14' />
            </div>
            <div className='flex items-center justify-center w-[40%]'>
                {!isLogged ?
                    <div className='flex gap-10'>
                        <div className='cursor-pointer'>Home</div>
                        <div className='cursor-pointer'>About us</div>
                        <div className='cursor-pointer'>FAQs</div>
                    </div> :
                    <div>Dashboard</div>
                }
            </div>
            <div className='flex items-center px-5 text-center justify-end w-[30%]'>
                {isLogged &&
                    <div className='flex gap-5 items-center mr-3'>
                        <MdSearch />
                        <IoNotifications />
                        <div>Pasindu Maneesha</div>
                        <FaUserCircle className='text-3xl' />
                    </div>
                }
                <button onClick={loginLogoutHandler} className='bg-blue-700 text-white px-3 py-1 rounded-full'>{isLogged ? 'Logout' : 'Login'}</button>
            </div>
        </div>
    )
}

export default Header
