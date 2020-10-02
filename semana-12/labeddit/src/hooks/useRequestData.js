import { useLayoutEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../services/api'

const useRequestData = (initialData, endpoint) => {

    const [data, setData] = useState(initialData)

    useLayoutEffect(() => {
        const token = window.localStorage.getItem('token')
        
        if (token) {
            requestData()
        }
    }, [endpoint])

    const requestData = () => {

        axios
        .get(`${baseUrl}${endpoint}`, {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })

        .then( (response) => {
            setData(response.data)
            console.log(response.data)
        })
        .catch( (error) => {
            console.log(error)
            alert('Ocorreu um erro no carregamento das informações. Tente novamente')
        })
    }

    return {data, requestData}

}

export default useRequestData