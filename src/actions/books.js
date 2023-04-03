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
         alert('Не удалось загрузить книги, возможно вы не авторизованы')
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
            
            
            
        } catch(e) {
         alert('вы не авторизованы, пожалуйста войди в ваш аккаунт!')
        }
        
        
    } 
         
    
}

export function getBooksByCategory(categoryID) {
    return async (dispatch) => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/catalog/books/category/${categoryID}`, {
          headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
        })
        
        dispatch(setBooks(response.data.content))
      } catch(e) {
        alert('Не удалось загрузить книги, возможно вы не авторизованы')
      }
    }
  } 

