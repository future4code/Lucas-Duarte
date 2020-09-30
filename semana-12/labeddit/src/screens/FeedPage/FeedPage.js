import React from 'react'
import {useLayoutEffect, useState} from 'react'
import axios from 'axios'

// ROUTER:
import { useHistory } from 'react-router-dom';
import { goToLogin, goToPost } from '../../routes/Coordinator'

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
import commentsIcon from '../../assets/img/comments.svg'

// STYLED
import {PageContainer, PostContainer, ButtonsContainer, ArrowImg,VotesCounter, ContentContainer, CreditText, PostTitle, PostText, CommentsContainer, CommentsImg, CommentsLabel} from './Styled'

import {LoadingImg, LoadingText} from '../../styled/loading-styled'



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

    const timePassed = (createdAt) => {
        const now = new Date().getTime()
        const milisseconds = now - createdAt
        const minutes = milisseconds * 1.6667E-5
        const hours = Math.floor(milisseconds/(1000 * 60 * 60))
        const days = Math.floor(hours/24)
        const months = Math.floor(days/30)

        if (minutes < 1) {
            return `less than one minute ago`
        } else if (hours < 1) {
            return `${Math.ceil(minutes)} minutes ago`
        } else if (hours === 1) {
            return `${hours} hour ago`
        } else if (hours < 24) {
            return `${hours} hours ago`
        } else if (days === 1) {
            return `${days} day ago`
        } else if (days < 30) {
            return `${days} days ago`
        } else if (months === 1) {
            return `${months} month ago`
        } else if (months > 1) {
            return `${months} months ago`
        }
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

                        <ContentContainer onClick={() => goToPost(history, post.id)}>
                        <CreditText>
                            Posted by u/{post.username.split(" ").join("")} {timePassed(post.createdAt)}
                        </CreditText>
                        <PostTitle>{post.title}</PostTitle>
                        <PostText>{post.text}</PostText>

                        <CommentsContainer onClick={() => goToPost(history, post.id)}>
                            <CommentsImg src={commentsIcon}/>
                            
                            {(post.commentsCount === 1)?
                            <CommentsLabel>{post.commentsCount} comment
                            </CommentsLabel>:
                            <CommentsLabel>{post.commentsCount} comments
                            </CommentsLabel>
                            }
                            
                        </CommentsContainer>

                        </ContentContainer>

                        </PostContainer>
                    )
                })}

        </PageContainer>
    )
}

export default FeedPage