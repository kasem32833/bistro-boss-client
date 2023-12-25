import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { NavLink, useLocation, useNavigate,  } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const {logIn, user, loginWithGoogle} = useContext(AuthContext); 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"
  const handleLogin =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value
    const password = form.password.value
    logIn(email, password)
    .then(resutl =>{
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You hvae successfully login",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, {replace: true});
      
  })
    .catch(error=>console.log(error))
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                autoComplete="on"
                placeholder="password"
                className="input input-bordered"
                required
              />
             <NavLink to='/register'>New here please <span className="text-red-500 uppercase">register</span> register first</NavLink>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            
          </form> 
          <div className="divider"></div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
