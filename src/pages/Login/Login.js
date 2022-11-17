import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    const loginHandler = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
        .then(userCredential=>{
            console.log(userCredential)

            // get jwt token
            fetch('https://wild-zone-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({email: userCredential.user.email})
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                localStorage.setItem('token', data.token);
                navigate(from, {replace: true});
            }) 
        })
        .catch(error=>console.log(error))
        event.target.reset();
    }

    const googleLoginHandler = () => {
        signInWithGoogle()
        .then(result=>navigate(from, {replace: true}))
        .catch(error=>console.error(error))
    }

    return (
        <div className="bg-base-200 py-32 ">
            <form onSubmit={loginHandler} className="card flex-shrink-0 w-full mx-auto max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control mt-6">
                        <input type='submit' className="btn red-bg-btn" value="Login" />
                    </div>
                    <div className="form-control mt-2">
                        <button type='button' onClick={()=>googleLoginHandler()} className="btn bg-white"><FcGoogle className='text-3xl'></FcGoogle></button>
                    </div>
                    <label className="label justify-center">
                        <Link to='/register' className="text-sm label-text-alt  ">Don't have an account? <span className='red-font underline underline-offset-4'>Register Here</span></Link>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default Login;