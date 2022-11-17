import React, { useContext, useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import MyReviewBox from '../../components/MyReviewBox/MyReviewBox';
import { AuthContext } from '../../context/AuthContext';
import {Helmet} from "react-helmet";


const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const [reviewLoader, setReviewLoader] = useState(true);
    useEffect(() => {
        // ----------
        async function getResponse() {
            // setLoading(true)
            const response = await fetch(`https://wild-zone-server.vercel.app/my-reviews?email=${user?.email}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            const data = await response.json(); // Extracting data as a JSON Object from the response
            // console.log(data)
            setReviewLoader(false)
            setReviews(data)
        }

        getResponse();
        // ----------
        // fetch(`https://wild-zone-server.vercel.app/my-reviews?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setReviews(data))
    }, [user?.email])

    if (reviewLoader) {
        return <div className='font-bold text-4xl flex h-screen justify-center items-center'>
            <ClipLoader
                color="#ff014d"
                size={46}
            />
        </div>
    }

    return (
        reviews.length!==0?
        <div className="overflow-x-auto max-w-7xl mx-auto my-20 shadow-xl">
            <Helmet>
                <title>My Reviews - Wild Zone</title>
            </Helmet>
            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>Service</th>
                        <th>Review</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        
                        reviews.map(singleReview => <MyReviewBox key={singleReview._id} singleReview={singleReview} reviews={reviews} setReviews={setReviews}></MyReviewBox>)
                        
                    }
                </tbody>
                {/* <!-- foot --> */}
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot> */}

            </table>
        </div>
        :
        <h1 className='font-bold text-4xl flex h-screen justify-center items-center'>No reviews were added</h1>
    );
};

export default MyReviews;