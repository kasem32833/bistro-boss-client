import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin';

const Register = () => {
  const {signUp, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate()
  const axiosPublic = useAxiosPublic();


  const handleRegister = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email =  form.email.value;
    const password =  form.password.value;
    const name = form.name.value;
    const photourl = form.photourl.value;
    console.log(email, password);

    signUp(email, password)
    .then(result => {
      console.log(result.user)
      updateUserProfile(name, photourl)
      .then(()=>{
        //console.log('User profile info updated');
        // create user entry in database 
        const userInfo = {
            name: name,
            email: email,
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
          if(res.data.insertedId){
            console.log('user added to the database');
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/')
          }
        })
        
      })
      .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
  }
  return (
    <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register Your Accoutn!</h1>
        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" name='name' placeholder="Type Your Name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name='photourl' placeholder="Your Photo URL" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' autoComplete='on' placeholder="password" className="input input-bordered" required />
            <NavLink to="/login">Already Have an account please <span className='text-red-500 uppercase'>Login</span></NavLink>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
  );
};

export default Register;