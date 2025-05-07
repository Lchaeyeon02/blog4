import styled from 'styled-components'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {db} from '../firebase.js'

const StyledWrapper = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 1240px;
    height: 67px;
    border: 1px solid #C4C4C4;
    border-radius: 50px;
    padding: 0px 30px;
`

const StyledContent = styled.p`
    font-size: 24px;
    color: #3E3F5B;
`

function CommentItem(props){

    const postId = useParams().id
    const { comment, onDeleteComment } = props

    const deleteComment = () => {
        db.collection('post').doc(postId).get().then((doc) => {
            const postData = doc.data();

            const updatedComments = postData.comments.filter(
                (c) => c.id !== comment.id
            );

            db.collection('post').doc(postId).update({
                comments: updatedComments
            }).then(() => {
                alert('댓글이 삭제되었습니다.');
                if (onDeleteComment) {
                    onDeleteComment(comment.id);
                }
            });
        });
    }
    
    return (
        <StyledWrapper>
            <StyledContent>{comment.content}</StyledContent>
            <img onClick={deleteComment} width={"36px"} height={"36px"} src="../public/x.png" alt="" />
        </StyledWrapper>
    )
}

export default CommentItem

