import axios from 'axios'

export const getData = (url, setData, auth) => {

    axios
        .get(url, {
            headers: {
                auth: auth,
            }
        })
        .then( (response) => {
            setData(response.data)
        })
        .catch( (error) => {
            console.log(error)
        });
  }

export const postData = (url, body) => {

    axios
    .post(url, body)
    .then ( (response) => {
        console.log(response.data)
    })
    .catch( (error) => {
        console.log(error)
    })
}