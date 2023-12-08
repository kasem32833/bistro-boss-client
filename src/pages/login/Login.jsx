import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

    }

    const handleCaptcha = (e)=>{
        const user_captcha_value = captchaRef.current.value;
       if(validateCaptcha(user_captcha_value) == true){
            setDisabled(false);
       }
       else{
        setDisabled(true);
       }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
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
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
            <NavLink to="/register">New here please <span className="text-red-500">Register</span></NavLink>

            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                placeholder="Type your Captcha show above"
                className="input input-bordered"
                required
                name="password"
              />
                <button className="btn btn-sm mt-4" onClick={handleCaptcha} type="submit">Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} type="submit" value="Login" className="btn btn-success"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
