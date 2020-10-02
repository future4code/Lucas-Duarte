import React from 'react'

// ROUTER:
import {useParams } from 'react-router-dom';

// HOOK:
import useForm from '../../hooks/useForm'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'

//FUNCTIONS:
import postData from '../../functions/postData'


//images:
import labedditIcon from '../../assets/img/reddit-icon.svg'
import noCommentsIcon from '../../assets/img/nocomments.svg'

// STYLED:
import {LoadingContainer, LoadingImg} from '../../styled/loading-styled'
import {PageContainer, PostForm, InputTitle, InputPostComment, Button} from './Styled-FeedPage'
import {BottomContainer, NoCommentsContainer, NoCommentsImg, NoCommentsTitle, NoCommentsText, CommentsContainer} from './Styled-PostPage'

//COMPONENTE:
import PostCard from '../../components/PostCard/PostCard'
import CommentCard from '../../components/CommentCard/CommentCard'


function PostPage() {

    useProtectedPage()

    const username = localStorage.getItem('username')
    const pathParams = useParams()

    const {data, requestData} = useRequestData([], `/posts/${pathParams.id}`)

    const post = data.post
    const comments = post && post.comments

    const { form, onChange, resetState } = useForm({
        commentText: ""
    })
    

    const createComment = () => {

        const endpoint = `/posts/${pathParams.id}/comment`
        const body = {
            text: form.commentText
        }

        const updatePost = () => {
            resetState()
            requestData()
        }

        postData(endpoint, body, updatePost)
    } 

    const submitForm = (event) => {
        event.preventDefault()
        createComment()
    }

    if (!post) {
        return (
            <PageContainer>
                <LoadingContainer>
                    <LoadingImg src={labedditIcon}/>
                </LoadingContainer>
            </PageContainer>
        )
    }

    return(
        <PageContainer>

            <PostCard
            post={post}
            page={'PostPage'}
            updateCard={() => requestData()}
            />

            <BottomContainer>
            <PostForm onSubmit = {submitForm}>
            <InputTitle>Comment as {username}</InputTitle>
            <InputPostComment
            name={'commentText'}
            value={form.commentText}
            onChange={onChange}
            placeholder={'What are your thoughts?'}
            required
            />
            <Button>Comment</Button>
            </PostForm>

            {(comments.length === 0)?
            <NoCommentsContainer>
                <NoCommentsImg src={noCommentsIcon} />
                <NoCommentsTitle>No Comments Yet</NoCommentsTitle>
                <NoCommentsText>Be the first to share what you think!</NoCommentsText>
            </NoCommentsContainer>:
            <CommentsContainer>
               {comments.sort((a,b) => {return a.createdAt - b.createdAt}).map( (comment) => {
                   return (
                       <CommentCard
                       comment ={comment}
                       />
                   )
               })} 
            </CommentsContainer>
            }

            </BottomContainer>

            
        </PageContainer>
    )
}

export default PostPage