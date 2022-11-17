import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceCard }) => {
    // console.log(serviceCard)
    const { img, service, price, description, _id } = serviceCard;

    return (
        <div>
            <div className="card bg-neutral mx-10 sm:mx-0 md:mx-0 shadow-xl">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img className='cursor-pointer' src={img} alt="Shoes" />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="card-body">
                    <div className=' flex justify-between mb-2'>
                        <h2 className="card-title text-2xl font-bold">{service}</h2>
                        <h2 className="card-title text-4xl font-bold red-font">${price}</h2>
                    </div>
                    <p>{description.slice(0, 100) + "....."}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/service/${_id}`}><button className="btn red-bg-btn">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;