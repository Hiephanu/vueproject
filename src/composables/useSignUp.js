import {ref} from 'vue'
import {projectAuth} from '@/config/firebase.js'
const error = ref(null);
const isPending =ref(false);
async function signUp(email,password,name){
    isPending.value=true;
    error.value =null
    try{
   const res = await projectAuth.createUserWithEmailAndPassword(email,password)
   if(res) throw new Error("Can not create a new user");
   await res.user.updateProfile({displayName:name})
   return res;
    }
    catch(err){
        console.log(err);
        error.value= err.message
    }
    finally{
        isPending.value=false
    }
}
export function useSignUp(){
    return {error,isPending,signUp}
}