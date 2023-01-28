import axios from "axios";
import { BOOK_URL_PREFIX } from "../constants/ApiConstants";


export function saveBook(book){
    return axios.post(BOOK_URL_PREFIX,book)
}

export function fetchAllBooks(){
    return axios.get(BOOK_URL_PREFIX)
}

export function editBookDetail(bookId)
{
    return axios.put(`${BOOK_URL_PREFIX}/${bookId}`)
}

export function deleteBook(bookId){
    return axios.delete(`${BOOK_URL_PREFIX}/${bookId}`)
}