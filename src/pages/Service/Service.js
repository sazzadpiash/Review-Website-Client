import React, { useContext, useEffect, useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ReviewBox from '../../components/ReviewBox/ReviewBox';
import { toast } from 'react-toastify';

const Service = () => {
    const location = useLocation();
    const { user } = useContext(AuthContext)
    const serviceData = useLoaderData();
    // console.log(serviceData)
    const { service, img, price, description, _id, publisher } = serviceData;
    const notify = () => toast("You have added a new review");
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://wild-zone-server.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    const reviewHandler = event => {
        event.preventDefault()
        const review = event.target.review.value;
        const { displayName, email, photoURL } = user;
        const data = { review, displayName, email, photoURL, service_id: _id };


        fetch('https://wild-zone-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((data) => {
                console.log(data)
                const oldReviews = [...reviews]
                oldReviews.unshift(data)
                setReviews(oldReviews)
                notify()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.target.reset();
    }

    return (
        <div>
            <div className='max-w-7xl mx-auto grid gap-10 grid-cols-2 mt-10'>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img className='cursor-pointer w-full rounded-xl' src={img} alt="service" />
                    </PhotoView>
                </PhotoProvider>
                <div>
                    <h2 className="text-4xl font-bold">{service}</h2>
                    <p className='mt-2 badge p-3 mb-3'>Publisher: {publisher}</p>
                    <h2 className="text-4xl font-bold red-font mb-3">${price}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-10 mt-12 mb-20 rounded-xl bg-neutral">
                <h2 className="text-2xl font-bold mb-5">Reviews</h2>
                {
                    reviews.map(singleReview=><ReviewBox key={singleReview._id} reviewData={singleReview}></ReviewBox>)
                }
                <div className="divider"></div>
                <div>
                    {
                        user ?
                            <form onSubmit={reviewHandler} className='text-right'>
                                <textarea className="textarea textarea-bordered w-full" name='review' placeholder="Review" required></textarea>
                                <button type="submit" className='btn red-border bg-neutral w-full mt-4' >Submit</button>
                            </form>
                            :
                            <div className="alert alert-error rounded-xl bg-red-600/25 text-white shadow-lg">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span color='text-white'>Please login to add a review <Link to='/login' state={{ from: location }} replace className='btn btn-outline btn-sm ml-4'>Login</Link></span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;