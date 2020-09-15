import { useEffect, useState } from 'react';
import {getData} from '../functions/requests'


const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)

    useEffect( () => {
        getData(url, setData)
    }, [url])

    const updateData = () => {
        getData(url, setData)
    }

    return [data, updateData]
}


export default useRequestData;