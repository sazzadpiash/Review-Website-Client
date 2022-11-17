import React from 'react';
import {Helmet} from "react-helmet";


const Blogs = () => {
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <Helmet>
                <title>Blogs - Wild Zone</title>
            </Helmet>
            <div className="bg-neutral p-10 rounded-xl mb-10">
                <h1 className="text-xl font-bold mb-2">Difference between SQL and NoSQL</h1>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className="bg-neutral p-10 rounded-xl mb-10">
                <h1 className="text-xl font-bold mb-2">What is JWT, and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
            </div>
            <div className="bg-neutral p-10 rounded-xl mb-10">
                <h1 className="text-xl font-bold mb-2">What is the difference between javascript and NodeJS?</h1>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className="bg-neutral p-10 rounded-xl mb-10">
                <h1 className="text-xl font-bold mb-2">How does NodeJS handle multiple requests at the same time?</h1>
                <p> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;