import React, { useState, createContext } from 'react'
import { searchImage, getImageDetails } from "../Api/ImageApi"


export const ImageContext = createContext()

export const ImageContextProvider = ({ children }) => {
    const [images, setImages] = useState([])
    const [imageDetails, setImageDetails] = useState({})
    const [isLoading, setIsloading] = useState(false)
    const [tags, setTags] = useState([])

    const searchImageHandler = (payload) => {
        setIsloading(true)
        searchImage(payload).then((res) => {
            setImages(res.hits)
            setIsloading(false)
        }).catch((error) => {
            setIsloading(false)
            throw error
        })
    }
    
    const getImageDetailsHandler = (id) => {
        setIsloading(true)
        getImageDetails(id).then((res) => {
            const data = res.hits[0]
            let obj = {}
            obj['imageURL'] = data.largeImageURL
            obj['tags'] = data.tags.split(', ')
            obj['user'] = data.user
            // set string to array
            setTags(data.tags.split(', '))
            setImageDetails(obj)
            setIsloading(false)
        }).catch((error) => {
            setIsloading(false)
            throw error
        })
    }

    return (
        <ImageContext.Provider value={{ images, searchImageHandler, isLoading, getImageDetailsHandler, imageDetails, tags }}>
            {children}
        </ImageContext.Provider>
    )
}