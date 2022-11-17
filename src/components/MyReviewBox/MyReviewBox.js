import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const MyReviewBox = ({ singleReview, reviews, setReviews }) => {
    const { service_id, review, _id } = singleReview;
    const [services, setService] = useState({});
    const notify = () => toast("You have deleted a review");

    useEffect(() => {
        fetch(`https://wild-zone-server.vercel.app/service/${service_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [service_id])

    const { service, img, publisher } = services;

    const deleteHandler = (id) => {
        fetch(`https://wild-zone-server.vercel.app/my-reviews/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    const oldReviews = reviews.filter(sReview => sReview._id !== _id)
                    setReviews(oldReviews)
                    notify();
                }

            })
    }

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        <div className="text-sm opacity-50">{publisher}</div>
                    </div>
                </div>
            </td>
            <td>
                {review.slice(0, 70)+'...'}
            </td>
            <th>
                <div className='text-right'>
                    <Link to={`/edit-my-reviews/${_id}`} className="btn btn-success btn-sm mr-2">Edit</Link>
                    <button onClick={() => deleteHandler(_id)} className="btn btn-error btn-sm">Delete</button>
                </div>
            </th>
        </tr>
    );
};

export default MyReviewBox;