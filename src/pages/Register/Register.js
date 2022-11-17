import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const { createAccount, updateUserInfo } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const createAccountHandler = (event) => {
        event.preventDefault();
        const displayName = event.target.dname.value;
        const photoURL = event.target.userimage.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createAccount(email, password)
            .then(user => {
                updateUserInfo({ displayName, photoURL })
                    .then((res) => { })
                    .catch((error) => {
                        console.log(error)
                    });
                console.log(user)
                navigate(from, {replace: true});
            })
            .catch(error => console.log(error))

        event.target.reset();
    }

    return (
        <div className="bg-base-200 py-20">
            <form onSubmit={createAccountHandler} className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name='dname' placeholder="full name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image Url</span>
                        </label>
                        <input type="text" name='userimage' placeholder="image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' className="btn red-bg-btn" value="Register" />
                    </div>
                    <label className="label justify-center">
                        <Link to='/login' className="text-sm label-text-alt  ">Already have an account? <span className='red-font underline underline-offset-4'>Login Here</span></Link>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Register;