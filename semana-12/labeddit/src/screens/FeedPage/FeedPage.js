import React from 'react'
import styled from 'styled-components'
import {useLayoutEffect, useState} from 'react'
import axios from 'axios'

// ROUTER:
import { useHistory } from 'react-router-dom';
import { goToLogin } from '../../routes/Coordinator'

// API:
import { baseUrl } from '../../services/api'

// HOOK:
import { useForm } from '../../hooks/useForm'

//images
import arrowDown from '../../assets/img/arrow-down.svg'
import arrowDownSelected from '../../assets/img/arrow-down-selected.svg'
import arrowUp from '../../assets/img/arrow-up.svg'
import arrowUpSelected from '../../assets/img/arrow-up-selected.svg'
import labedditIcon from '../../assets/img/reddit-icon.svg'

// STYLED
import {PostContainer, ButtonsContainer, ArrowImg, VotesCounter, ContentContainer, LoadingImg, LoadingText} from './Styled'

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DAE0E6;
    min-height: 100vh;
`

function FeedPage() {

    const history = useHistory()
    
    const [allPosts, setAllPosts] = useState()
    const { form, onChange, resetState } = useForm({
        title: "",
        text: "",
    })


    useLayoutEffect( () => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLogin(history)
        } else {
            getPosts()
        }
    }, [])


    const getPosts = () => {
        
        axios
        .get(`${baseUrl}/posts`, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })

        .then( (response) => {
            setAllPosts(response.data.posts)
            console.log(response.data)
        })
        .catch ( (error) => {
            console.log(error)
        })

    }

    const createPost = () => {

        const body = {
            text: form.text,
            title: form.title
        }

        axios
        .post(`${baseUrl}/posts`, body, {
            headers: {
                authorization: localStorage.getItem("token")
            }
        })

        .then ( (response) => {
            console.log(response.data)
            resetState()
            getPosts()
        })
        .catch ( (error) => {
            console.log(error)
        })
    }

    const voteComment = (vote, id) => {
        const body = {
            direction: vote
        }

        axios
        .put(`${baseUrl}/posts/${id}/vote`, body, {headers:{authorization:localStorage.getItem("token")}})
        
        .then( (response) => {
            getPosts()
        })
        .catch( (error) => {
            console.log(error)
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        createPost()
    } 

    const compare = (a,b) => {
        return a.createdAt - b.createdAt
    }

    if (!allPosts) {
        return (
        <PageContainer>
            <LoadingImg src={labedditIcon}/>
            <LoadingText>Let's go!</LoadingText>
        </PageContainer>
        )
    }

    return(
        <PageContainer>
            <h3>Criar post</h3>

            <form onSubmit = {submitForm}>
                <input
                name={'title'}
                value={form.title}
                onChange = {onChange}
                placeholder={'Título'}
                type={'text'}
                autoFocus
                required
                />
                <input
                name={'text'}
                value={form.text}
                onChange = {onChange}
                placeholder={'Texto do post'}
                type={'text'}
                required
                />
                <button>Enviar</button>
            </form>
                
                {allPosts.sort((a,b) => {return b.createdAt - a.createdAt}).map( (post) => {
                    return (
                        <PostContainer>
                        <ButtonsContainer>

                        {(post.userVoteDirection === 1)? 
                        <ArrowImg src={arrowUpSelected} onClick={() => voteComment(0, post.id)}/>:
                        <ArrowImg src={arrowUp} onClick={() => voteComment(1, post.id)}/>}  

                        <VotesCounter>{post.votesCount}</VotesCounter>

                        {(post.userVoteDirection === -1)? 
                        <ArrowImg src={arrowDownSelected} onClick={() => voteComment(0, post.id)}/>:
                        <ArrowImg src={arrowDown} onClick={() => voteComment(-1, post.id)}/> }
                        </ButtonsContainer>

                        <ContentContainer>
                        <div>
                            created by {post.username}
                        </div>
                        <h3>{post.title}</h3>
                        <div>{post.text}</div>
                        <div>{post.commentsCount} comentários</div>
                        </ContentContainer>

                        </PostContainer>
                    )
                })}

        </PageContainer>
    )
}

export default FeedPage