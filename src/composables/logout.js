import {ref} from "vue";
import { projectAuth } from "@/config/firebase"
const error = ref(null);
async function logout(){
    error.value =null;
    try {
        const res= await projectAuth.signOut()
        return res
    } catch (err) {
        console.log(err);
        error.value= err.message
    }
}
export function useLogOut(){
    return {error,logout}
}