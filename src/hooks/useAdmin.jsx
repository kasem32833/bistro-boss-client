import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user}  = useAuth();
    const axiosSecure = useAxiosSecure();
    console.log(user);
    let admin = false;
    const [ data = 'isAdmin'] = useQuery({
        queryKey: ['uasers'],
        queryFn: ()=>{
            axiosSecure.get(`/dashboard/users/${user.email}`)
            .then(res => {
                console.log(res.data);
                const savedUser = res.data
                if(savedUser.email = user.email){
                    console.log('Uaser is an admin');
                }

            })
            .catch(err=>{
                console.log(err);
            })
        }
    })  
    
    return (
        <div>
            
        </div>
    );
};

export default useAdmin;