import axios from 'axios'
import { baseUrl } from '../services/api'

const postData = (endpoint, body, updateFunction) => {

    axios
    .post(`${baseUrl}${endpoint}`, body, {
        headers: {
            authorization: localStorage.getItem("token")
        }
    })

    .then ( (response) => {
        console.log(response.data)
        updateFunction()
    })
    .catch ( (error) => {
        console.log(error)
        alert(error)
    })
}

export default postData

