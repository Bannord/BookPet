 import axios from 'axios';
import { setUser } from '../reducers/userReducer';


export const registration = async (email, password, firstname, lastname ) => {
    try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register',{ 
          method: 'POST',
          email,
          password,
          firstname,
          lastname
        }, {
            headers: {
              'Content-Type': 'application/json'
            }
    })
    localStorage.setItem('token', response.data.token)
    alert(response.data.message)
    
    } catch (error) {
        alert(error.response.data.message)
    }
    
}

export const auth =  (email, password, ) => {
  return async dispatch => {
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate',{ 
            email,
            password
          }, 
          {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          
          
          dispatch(setUser(response.data.token))
          localStorage.setItem('token', response.data.token) 
          
          
        }   
        catch (error) {
            alert(error.response.data.message)
        }
  
      }   
}
  


