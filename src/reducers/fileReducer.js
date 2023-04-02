

const SET_BOOKS = 'SET_BOOKS'
const SET_CATEGORY = 'SET_CATEGORY'
const defaultState = {
    books: [],
    currentDir: null

}

export default function fileReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_BOOKS: return {
            ...state,
            books: action.payload 
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