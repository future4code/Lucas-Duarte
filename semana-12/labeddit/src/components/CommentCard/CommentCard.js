import React from 'react'

// FUNCTIONS:
import timePassed from '../../functions/timePassed'

//STYLED:
import {CommentCardContainer, UserName, CommentDate, CommentText} from './Styled-Comments'



const CommentCard = (props) => {
    
    return (
        <CommentCardContainer key={props.comment.id}>

            <UserName>{props.comment.username} </UserName><CommentDate>· {timePassed(props.comment.createdAt)}</CommentDate>
            <CommentText>{props.comment.text}</CommentText>
        </CommentCardContainer>
    )
}

export default CommentCard