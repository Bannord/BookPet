import axios from "axios";
import { setBooks } from "../reducers/fileReducer";
import { setCategory } from "../reducers/fileReducer";

export function getBooks () {
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/catalog/books', {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
           
            dispatch(setBooks(response.data.content))
            
        } catch(e) {
         alert(e.response.massage)
        }
        
        
    } 
    
}

export const getCategoryes =  () => { 
    return async dispatch => {
        try {
            const response = await axios.get('http://localhost:8080/api/v1/catalog/books/category', {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
            })
           
            dispatch(setCategory(response.data))
            console.log(response.data)
            
        } catch(e) {
         alert(e)
        }
        
        
    } 
         
    
}