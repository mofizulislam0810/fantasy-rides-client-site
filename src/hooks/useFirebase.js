import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import initialization from '../Firebase/Firebase.initialization';

initialization()

const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading]=useState(true);
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        })
    },[])

    const logout = () => {
        signOut(auth)
        .then(()=>{
            setUser({});
        })
        .finally(()=>{
            setIsLoading(false);
        })
    }

    return {
        user,
        signInUsingGoogle,
        isLoading,
        logout
    }
};

export default useFirebase;


