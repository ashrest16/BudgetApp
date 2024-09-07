import axios from "axios";
import { handleError } from "@/Helpers/ErrorHandler";
const api = "http://localhost:5161/api/"

export const loginAPI = async (username,password) => {
    try{
        const response = await axios.post(api + "account/login", {
            username: username,
            password: password
        });
        return response;
    }
    catch (error){
        handleError(error);
    }
}

export const registerAPI = async (email,username,password) => {
    try {
        const response = await axios.post(api + "account/register", {
            email: email,
            username: username,
            password: password
        });
        return response;
    } catch (error){
        handleError(error)
    }
    
}