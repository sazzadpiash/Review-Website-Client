import React from 'react';
import logo from './../../images/logo1.png'
import { BsFacebook, BsGithub, BsGoogle, BsTwitter } from 'react-icons/bs';


const Footer = () => {
    return (
        <div className='bg-neutral'>
            <footer className="footer p-10 items-center justify-between text-neutral-content max-w-7xl mx-auto">
                <div>
                    <img src={logo} className="w-64" alt="" />
                </div>
                <div className='flex'>
                    <a href="https://facebook.com"><BsFacebook className='text-xl mr-2'></BsFacebook></a>
                    <a href="https://facebook.com"><BsGithub className='text-xl mr-2'></BsGithub></a>
                    <a href="https://facebook.com"><BsGoogle className='text-xl mr-2'></BsGoogle></a>
                    <a href="https://facebook.com"><BsTwitter className='text-xl mr-2'></BsTwitter></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;