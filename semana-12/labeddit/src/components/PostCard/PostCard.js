import React, {useState}  from 'react'

// API:
import axios from 'axios'
import { baseUrl } from '../../services/api'

// ROUTER:
import { useHistory } from 'react-router-dom';
import { goToPost } from '../../routes/Coordinator'

// FUNCTIONS:
import timePassed from '../../functions/timePassed'

//images
import arrowDown from '../../assets/img/arrow-down.svg'
import arrowDownSelected from '../../assets/img/arrow-down-selected.svg'
import arrowUp from '../../assets/img/arrow-up.svg'
import arrowUpSelected from '../../assets/img/arrow-up-selected.svg'
import commentsIcon from '../../assets/img/comments.svg'

// STYLED
import {PostContainer, ButtonsContainer, ArrowImg, VotesCounter, ContentContainer, CreditText, PostTitle, PostText, CommentsContainer, CommentsImg, CommentsLabel} from './Styled-Post'


const PostCard = (props) => {

    const history = useHistory()


    const [voteDirection, setVoteDirection] = useState(props.post.userVoteDirection)
    const [votesCountFront, setVotesCountFront] = useState(props.post.votesCount)


    const voteHandler = (vote, id) => {
            setVoteDirection(vote)
            sendVote(vote, id)

            if (voteDirection === 0) {
                if (vote === 1) {
                    setVotesCountFront(votesCountFront + 1)
                } else if (vote === -1) {
                    setVotesCountFront(votesCountFront - 1)
                }
            } else if (voteDirection === 1) {
                if (vote === 0) {
                    setVotesCountFront(votesCountFront - 1)
                } else if (vote === -1) {
                    setVotesCountFront(votesCountFront - 2)
                }
            } else if (voteDirection === -1) {
                if (vote === 0) {
                    setVotesCountFront(votesCountFront + 1) 
                } else if (vote === 1) {
                    setVotesCountFront(votesCountFront + 2)
                }
            }    
    }

    const sendVote = (vote, id) => {
        const body = {
            direction: vote
        }

        axios
        .put(`${baseUrl}/posts/${id}/vote`, body, {headers:{authorization:localStorage.getItem("token")}})
        
        .then( (response) => {
           if (props.page === 'FeedPage') {
            props.updateFeed()
           } else {
            props.updateCard()
           }
        })
        .catch( (error) => {
            console.log(error)
        })
    }

    return(
            <PostContainer
            page={props.page}
            >
                <ButtonsContainer
                page={props.page}>

                    {(voteDirection === 1)? 
                    <ArrowImg src={arrowUpSelected} onClick={() => voteHandler(0, props.post.id)}/>:
                    <ArrowImg src={arrowUp} onClick={() => voteHandler(1, props.post.id)}/>}

                    <VotesCounter>{votesCountFront}</VotesCounter>

                    {(voteDirection === -1)? 
                    <ArrowImg src={arrowDownSelected} onClick={() => voteHandler(0, props.post.id)}/>:
                    <ArrowImg src={arrowDown} onClick={() => voteHandler(-1, props.post.id)}/> }

                </ButtonsContainer>

                    <ContentContainer 
                    onClick={() => goToPost(history, props.post.id)}
                    page={props.page}
                    >

                        <CreditText title={new Date (props.post.createdAt).toString()}>
                        Posted by u/{props.post.username.split(" ").join("")} {timePassed(props.post.createdAt)}
                        </CreditText>
                        
                        <PostTitle>{props.post.title}</PostTitle>
                        <PostText>{props.post.text}</PostText>

                        <CommentsContainer onClick={() => goToPost(history, props.post.id)}>
                            <CommentsImg src={commentsIcon}/>
                            
                            {(props.post.commentsCount === 1)?
                            <CommentsLabel>{props.post.commentsCount} comment
                            </CommentsLabel>:
                            <CommentsLabel>{props.post.commentsCount} comments
                            </CommentsLabel>
                            }
                            
                        </CommentsContainer>

                    </ContentContainer>

            </PostContainer>
    )
}

export default PostCard