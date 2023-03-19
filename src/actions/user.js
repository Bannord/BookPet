import axios from "axios";

export const registration = async (email, password) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
        email,
        password
    })
    alert(response.data.message)
    } catch (error) {
        alert(error)
    }
    
}