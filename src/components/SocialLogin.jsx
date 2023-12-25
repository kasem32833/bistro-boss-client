import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {loginWithGoogle} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = ()=>{
       loginWithGoogle()
       .then(result => {
        console.log(result.user)
        const userInfo = {
            email: result.user.email,
            name: result.user.displayName,
        }
        axiosPublic.post('/users', userInfo)
        .then(res=>{
            console.log(res.data);
            navigate('/')
        })

    })
    }

    return (
        <div>
            <div className="flex justify-center items-center">
                <button className="inline-flex justify-center items-center my-6" onClick={handleGoogleSignIn} >Login With Google <span className="text-3xl"><FcGoogle></FcGoogle></span></button>
            </div>
        </div>
    );
};

export default SocialLogin;