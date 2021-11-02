import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user,setUser]= useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth= getAuth();

    // --------------
    const [error,setError] = useState('')
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')

// ---------------------



const handleName = e => {
    setName(e.target.value)
}
const handleEmail = e => {
    setEmail(e.target.value)
}
const handlePass = e => {
    setPass(e.target.value)
}


// ------------------- 


const signUpp = () => {
    createUserWithEmailAndPassword(auth, email, pass)
    .then((result) => {
        const newUser = result.user
        newUser.displayName = name
        setUser(newUser)
    })
    .catch((error) => {
        setError(error.message)
    });
}


const loggIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
        .then((result) => {
            setUser(result.user)
        })
        .catch((error) => {
            setError(error.message)
        });
}


const signOutt = () => {
    signOut(auth).then(() => {
        setUser({})
      }).catch((error) => {
        setError(error.message)
      });
}




    // ------------------


    

const signInUsingGoogle = () => {
    
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();

   return  signInWithPopup(auth,googleProvider)
     
    

}

useEffect(()=>{
  const unsubscribed=  onAuthStateChanged(auth,user=>{
if(user){
    setUser(user)
}
else {
    setUser({})
}
setIsLoading(false);

    });

    return () =>  unsubscribed;
},[])

const logOut = () =>{
    setIsLoading(true);
    signOut(auth)
    .then(()=>{})
    .finally(() => setIsLoading(false));
}

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        error,signOutt,handleName
        ,handleEmail,handlePass,signUpp,loggIn

    }
}

export default useFirebase;