import * as types from '../types'

const initialState = {
    booksData: null,
    moviesData: null,

}

export const GetArchive = (state = initialState, action) => {
    switch (action.type) {
        case types.BOOKS_DATA:
            return {
                ...state,
                booksData: action.payload.booksData,
            }
        case types.MOVIES_DATA:
            return {
                ...state,
                moviesData: action.payload.moviesData,
            }
        default:
            return state
    }
}