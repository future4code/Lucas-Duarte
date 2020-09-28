import React from 'react'
import {useEffect} from 'react'
import axios from 'axios'

// ROUTER:
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/Coordinator'

import { baseUrl } from '../../services/api'

function FeedPage() {

    const history = useHistory()

    useEffect( () => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLogin(history)
        }
    })


    // const getPosts = () => {
        
    //     axios
    //     .get(`${baseUrl}/posts`)

    //     .then( (response) => {
    //         console.log(response.data)
    //     })
    //     .catch ( (error) => {
    //         console.log(error)
    //     })

    // }

    return(
        <div>
            ESSA É A PÁGINA DO FEED
        </div>
    )
}

export default FeedPage