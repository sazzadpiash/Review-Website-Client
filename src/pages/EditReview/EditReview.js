import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';

const EditReview = () => {
    const { user } = useContext(AuthContext);
    const reviewData = useLoaderData();
    // console.log(serviceData)
    const id = useParams();
    const navigate = useNavigate()
    const notify = () => toast("You have edited a review");
    // console.log(id)
    const editReviewHandler = (event) => {
        event.preventDefault()
        const review = event.target.review.value;
        const { displayName, email, photoURL } = user;
        const data = { review, displayName, email, photoURL };

        fetch(`https://wild-zone-server.vercel.app/edit-review/${id.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount === 1) {
                    console.log(data.modifiedCount)
                    notify()
                    navigate('/my-reviews')
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.target.reset();
    }

    return (
        <div className='max-w-5xl mx-auto my-20'>
            <div className='p-5 bg-neutral rounded-lg mb-4'>
            {reviewData.review}
            </div>
            <form onSubmit={editReviewHandler} className='text-right'>
                <textarea className="textarea h-52 textarea-bordered w-full" name='review' placeholder="Edit Review" required></textarea>
                <input type="submit" value="Submit" className='btn red-border bg-neutral w-full mt-4' />
            </form>
        </div>
    );
};

export default EditReview;