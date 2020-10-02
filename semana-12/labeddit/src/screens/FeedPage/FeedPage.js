import React from 'react'

// COMPONENTES:
import PostCard from '../../components/PostCard/PostCard'

// HOOK:
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

//FUNCTIONS:
import postData from '../../functions/postData'

//images
import labedditIcon from '../../assets/img/reddit-icon.svg'

// STYLED
import {PageContainer, Title, FormContainer, PostForm, InputPostTitle, InputPostComment, Button} from './Styled-FeedPage'
import {LoadingContainer, LoadingImg, LoadingText} from '../../styled/loading-styled'


function FeedPage() {

    useProtectedPage()

    const {data, requestData} = useRequestData([], '/posts')
    const posts = data.posts

    const renderPosts = () => {
        
        return posts.sort((a,b) => {return b.createdAt - a.createdAt}).map( (post) => {
            return (
                <PostCard
                key={post.id}
                post={post}
                page={'FeedPage'}
                updateFeed={() => requestData()}
                />
            )
        })
    }

    const { form, onChange, resetState } = useForm({
        title: "",
        text: "",
    })

    const createPost = () => {

        const body = {
            text: form.text,
            title: form.title
        }

        const endpoint = '/posts'

        const updatePost = () => {
            resetState()
            requestData()
        }

        postData(endpoint, body, updatePost)

    }

    const submitForm = (event) => {
        event.preventDefault()
        createPost()
    } 

    return(
        <PageContainer>
            <FormContainer>
                <PostForm onSubmit = {submitForm}>
                <Title>Create a post</Title>
                    <InputPostTitle
                    name={'title'}
                    value={form.title}
                    onChange = {onChange}
                    placeholder={'Title'}
                    type={'text'}
                    autoFocus
                    required
                    />
                    <InputPostComment
                    name={'text'}
                    value={form.text}
                    onChange = {onChange}
                    placeholder={'Text'}
                    type={'text'}
                    required
                    />
                    <Button>Post</Button>
                </PostForm>
            </FormContainer>

            {posts && posts.length > 0 ? 
            renderPosts() : 
            <LoadingContainer>
                <LoadingImg src={labedditIcon}/>
                <LoadingText>Loading posts</LoadingText>
            </LoadingContainer>}


        </PageContainer>
    )
}

export default FeedPage