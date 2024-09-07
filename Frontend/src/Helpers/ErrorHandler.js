import axios from "axios";
import { toast } from "react-toastify";
export const handleError = (err) => {
    if (axios.isAxiosError(err)){
        var error = err.response;
        if (Array.isArray(error?.data.errors)){
            for (let val of error.data.errors){
                toast.warning(val.description);
            }
        } else if (typeof error?.data.errors === 'object'){
            for (let e in error?.data.errors){
                toast.warning(error.data.errors[e][0])
            }
        } else if (error?.data){
            toast.warning(error.data);
        } else if (error?.status == 401){
            toast.warning("Please login.");
            window.history.pushState({},"LoginPage", "/login")
        } else if (err){
            toast.warning(error?.data);
        }
    }
}