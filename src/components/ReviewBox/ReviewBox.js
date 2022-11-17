import React from 'react';

const ReviewBox = ({reviewData}) => {
    const {displayName, photoURL, email, review} = reviewData;

    return (
        <div className="alert shadow-lg rounded-xl mb-5">
            <div className="items-start">
                <div className="avatar">
                    <div className="w-14 rounded-xl">
                        <img src={photoURL} alt='user' />
                    </div>
                </div>
                <div className='pl-2'>
                    <h2 className='text-xl font-bold'>{displayName}</h2>
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewBox;