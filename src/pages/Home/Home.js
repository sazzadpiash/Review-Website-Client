import React from 'react';
import Gallery from 'react-photo-gallery';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import banner from './../../images/banner.webp';
import './Home.css';
import { photos } from './photos';
import { IoMdArrowRoundForward } from 'react-icons/io';
import {Helmet} from "react-helmet";

const Home = () => {
    const serviceData = useLoaderData();
    console.log(serviceData)
    return (
        <div>
            <Helmet>
                <title>Wild Zone | Home</title>
            </Helmet>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${banner}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-7xl font-bold uppercase">Wild <span className='red-font'>Zone</span></h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/services' className="btn red-bg-btn">Services</Link>
                    </div>
                </div>
            </div>
            <div className='services max-w-7xl sm:px-10 mx-auto gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-28'>
                {
                    serviceData.map(service => <ServiceCard key={service._id} serviceCard={service}></ServiceCard>)
                }
            </div>
            <div className='text-center'><Link className='btn red-bg-btn mt-10 mb-20' to='/services'>See All</Link></div>
            <div className="divider mb-20 max-w-7xl mx-auto"></div>
            <div className='max-w-7xl mx-auto mb-20'>
                <h2 className='font-bold text-6xl text-center mb-5 uppercase'>Best <span className='red-font'>Photos</span></h2>
                <Gallery photos={photos} />
            </div>
            <div className='bg-base-200'>
                <div className="hero min-h-screen max-w-7xl mx-auto">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Contact Us</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-lg md:mr-10 shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="Email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered h-32" placeholder="Message"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn red-bg-btn font-bold text-base">Send<IoMdArrowRoundForward className='text-xl ml-1'></IoMdArrowRoundForward></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;