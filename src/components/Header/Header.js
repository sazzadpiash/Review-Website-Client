import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from './../../images/logo1.png'

const Header = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='py-3 bg-neutral'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">

                    <Link to='/'><img className='w-44' src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blogs'>Blog</Link></li>
                        {
                            user ?
                                <>
                                    <li><Link to='/my-reviews'>My Reviews</Link></li>
                                    <li><Link to='/add-service'>Add Service</Link></li>
                                </>
                                :
                                <></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={logOut} className='btn red-bg-btn'>Logout</button> : <Link state={{ from: location }} replace className='btn red-bg-btn' to='/login'>Login / Register</Link>
                    }
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/blogs'>Blog</Link></li>
                            {
                                user ?
                                    <>
                                        <li><Link to='/my-reviews'>My Reviews</Link></li>
                                        <li><Link to='/add-service'>Add Service</Link></li>
                                    </>
                                    :
                                    <></>
                            }
                        </ul>
                    </div>
                </div>
            </div>

            {/* ------------------------------------- */}



        </div>
    );
};

export default Header;