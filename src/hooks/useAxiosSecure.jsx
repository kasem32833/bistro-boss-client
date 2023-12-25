import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


 const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    
})
const useAxiosSecure = () => {
    const {logOut } = useAuth();
    const navigate = useNavigate();
    // request interceptor to add authorization header for every secure cll to api
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        //console.log('request stopped by interceptor', token);
        config.headers.authorization =  `Bearar ${token}`;
        return config
    }), function(error){
        // Do something with request error
         return Promise.reject(error);  
    }

    // interceps 401 and 403 status 
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }),async(error)=>{
        const status = error.response.status;
        console.log('error code from interceptor', status);
        if(status === 401 || status === 403 ){
            await logOut();
            navigate('/login')

        }
        return Promise.reject(error);

    }

    return axiosSecure
};

export default useAxiosSecure;