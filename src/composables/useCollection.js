import {ref} from "vue";
import { fireStoreCore } from "@/config/firebase"


const useCollection = (name)=>{
    const error= ref(null);
    async function addRecord(record){
        error.value= null;
        try {
            const res= await fireStoreCore.collection(name).add(record)
            return res
        } catch (err) {
            console.log(err);
            error.value= err.message
        }
    }

    return {error,addRecord}
}
export default useCollection