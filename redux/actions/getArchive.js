import React from 'react'
import * as types from '../types'
import axios from 'axios'
import { API_URL } from '../../constants/api'

export function BooksData(booksData) {
  return {
    type: types.BOOKS_DATA,
    payload: {
      booksData
    }
  }
}

export function MoviesData(moviesData) {
  return {
    type: types.MOVIES_DATA,
    payload: {
      moviesData
    }
  }
}

export const GetMovies = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL.movie}`, { timeout: 30000 })

      if (res.data.result !== 0) {
        dispatch(MoviesData(res?.data))
      }
    } catch (e) {
      console.log('Error!' + e)
    }
  }
}

export const GetBooks = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${API_URL.book}`, { timeout: 30000 })

      if (res.data.result !== 0) {
        dispatch(BooksData(res?.data))
      }
    } catch (e) {
      console.log('Error!' + e)
    }
  }
}
