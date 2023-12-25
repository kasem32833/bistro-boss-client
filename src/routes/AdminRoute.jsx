import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({children}) => {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading){
        return <div className="flex justify-center items-center pt-20"><div className="radial-progress " style={{"--value":70}} role="progressbar">70%</div></div>
    }
    if(user && isAdmin){
        return children ;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
   
};

export default AdminRoute;