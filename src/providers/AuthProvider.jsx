import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebse-config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";



const auth = getAuth(app)

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] =  useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const signUp = (email, password)=>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password)=>{
        setLoading(true);
       return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =()=>{
        setLoading(true);
       return signOut(auth);

    }
    const updateUserProfile = (name, photourl)=>{
        setLoading(true);
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photourl
       })

    }

    const loginWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    useEffect(()=>{
      const unsubscribe  = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            // console.log(currentUser);
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    // console.log(res.data.token);
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)  
                    }
                })

            }else{
                // TODO: remove token (if token stored in client side) (Local storage, caching in memory)
                localStorage.removeItem('access-token');
            }
            setLoading(false)

        });

        return ()=>{
            return unsubscribe();
        }

    },[axiosPublic])

    const authInfo= {
        user,
        loading,
        signUp,
        logIn,
        logOut,
        updateUserProfile,
        loginWithGoogle
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;