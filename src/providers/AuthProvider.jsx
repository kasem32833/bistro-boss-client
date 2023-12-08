import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebse-config";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] =  useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const unsubscribe  = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        });

        return ()=>{
            return unsubscribe();
        }

    },[])

    const authInfo= {
        user,
        loading,
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;