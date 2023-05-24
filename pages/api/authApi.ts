import axios from "axios";
const API_BASE_URL = "http://localhost:8000/api";

export const loginUser = async(loginData: any) => {
    try {
        
        const response = await axios.post(`${API_BASE_URL}/login`,loginData);
        return response.data;
        // return response.data;
    } catch (error) {
        console.log(error);
    }
}