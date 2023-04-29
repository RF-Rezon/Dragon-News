import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
             <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse gap-x-14">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <p className='mt-5'>Already have an account? <Link to={"/login"}><span className='text-base font-extrabold text-gray-700 '>Log In</span></Link></p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;