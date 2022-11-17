import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';
import {Helmet} from "react-helmet";


const AddService = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const notify = () => toast("You have added a new service");
    const addServiceHandler = event => {
        event.preventDefault();
        const service = event.target.serviceName.value;
        const img = event.target.serviceIMG.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const publisher = user.displayName;
        const publisherEmail = user.email;

        const serviceData = {service, img, price, description, publisher, publisherEmail}

        console.log(serviceData)

        fetch('https://wild-zone-server.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        }).then((response) => response.json())
            .then((data) => {
                // console.log(data)
                navigate('/')
                notify()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        event.target.reset();
    }
    return (
        <div className="bg-base-200 py-20">
            <Helmet>
                <title>Add Service - Wild Zone</title>
            </Helmet>
        <form onSubmit={addServiceHandler} className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name of the service</span>
                    </label>
                    <input type="text" name='serviceName' placeholder="service" className="input input-bordered" required/>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input type="text" name='serviceIMG' placeholder="image" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name='price' placeholder="price" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea className="textarea h-28 textarea-bordered w-full" name='description' placeholder="service details" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <input type='submit' className="btn red-bg-btn" value="Add Service" />
                </div>
            </div>
        </form>
    </div>
    );
};

export default AddService;