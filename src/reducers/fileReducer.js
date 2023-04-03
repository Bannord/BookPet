const SET_BOOKS_BY_CATEGORY = 'SET_BOOKS_BY_CATEGORY'

const SET_BOOKS = 'SET_BOOKS'
const SET_CATEGORY = 'SET_CATEGORY'
const defaultState = {
    books: [],
    currentDir: null,
    categoryes: []
}

export default function fileReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_BOOKS: return {
            ...state,
            books: action.payload 
        }
        case SET_BOOKS_BY_CATEGORY: return {
            ...state,
            category: action.payload,
            currentDir: action.categoryID
        } 
       
        case SET_CATEGORY: return {
            ...state,
            categoryes: action.payload
        }
        default:
            return state
    }
}

export const setBooks = (books) => ({type: SET_BOOKS, payload: books})
export const setCategory = (categoryes) => ({type: SET_CATEGORY, payload: categoryes})
export const setBooksByCategory = (category) => ({type: SET_BOOKS_BY_CATEGORY, payload: category}) 