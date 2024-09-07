import axios from "axios";
import { handleError } from "@/Helpers/ErrorHandler";
const api = "http://localhost:5161/api/"

export const deleteTransactionAPI = async(id) => {
    try {
        const data = axios.delete(`${api}Transaction/${id}`, {
            headers: {
                id: id
            } 
        });
        return data;
    }catch (error){
        handleError(error);
    }

};

export const createTransactionAPI = async(name,cost,type,category,date) => {
    try {
        const data = axios.post(`${api}Transaction`, {
            name:name,
            cost:cost,
            types: type,
            category: category,
            date: date
        });
        return data;
    }catch (error){
        handleError(error);
    }

}

export const getTransactionAPI = async() => {
    try {
        const data = axios.get(`${api}Transaction`);
        return data;
    }catch (error){
        handleError(error);
    }

}