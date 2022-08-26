import { API_KEY } from '@env'
import axios from 'axios'

export const searchImage = async(payload) => {
    const { data } = await axios.get(`https://pixabay.com/api`, {params: { key: API_KEY, q: payload }})
    return data   
}

export const getImageDetails = async (id) => {
    const { data } = await axios.get(`https://pixabay.com/api`, {params: { key: API_KEY, id: id }})
    return data   
}