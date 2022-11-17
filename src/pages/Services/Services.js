import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import {Helmet} from "react-helmet";


const Services = () => {
    const [loading, setLoading] = useState(true)
    // const serviceData = useLoaderData();
    const [serviceData, setServiceData] = useState([]);


    useEffect(() => {
        fetch('https://wild-zone-server.vercel.app/services')
            .then(res => res.json())
            .then(deta => {
                setServiceData(deta)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className='font-bold text-4xl flex h-screen justify-center items-center'>
            <ClipLoader
                color="#ff014d"
                size={46}
            />
        </div>
    }

    return (
        <div className='services max-w-7xl sm:px-10 mx-auto gap-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-16'>
            <Helmet>
                <title>Services - Wild Zone</title>
            </Helmet>
            {
                serviceData.map(service => <ServiceCard key={service._id} serviceCard={service}></ServiceCard>)
            }
        </div>
    );
};

export default Services;