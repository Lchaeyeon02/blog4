import styled from "styled-components";
import { useState, useEffect } from "react";

import Button from "./Button";
import TextInput from "./TextInput.jsx";
import PostContainer from "./PostContainer.jsx";
import MainHeader from "./MainHeader.jsx";
import CommentList from "./CommentList.jsx";

import { useParams } from "react-router-dom";
import { db } from '../firebase.js'

const Styledflex = styled.div`
    display: flex;
    gap: 18px
    height: 75px;
`

const MainDiv = styled.div`
    padding: 50px 80px;
`

function PostViewPage(props){
    const postId = useParams().id

    const [post, setPost] = useState({
        id: postId,
        title: '',
        content: '',
        comments: []
    })
    
    useEffect(() => {
        db.collection('post').doc(postId).get().then((doc) => {
            setPost(doc.data())
        })
    }, [])

    const [comment, setComment] = useState('')

    const writeComment = () => {
        let timestamp = new Date().getTime().toString()
        let tempComments = post.comments
        tempComments.push({
            id: `${postId}_${timestamp}`,
            content: comment
        })

        db.collection('post').doc(postId).update({
            comments: tempComments
        }).then(() => {
            alert('댓글이 등록되었습니다!')
            setComment('')
        })
    }

    // 댓글 삭제된거 전달달
    const handleCommentDeleted = (commentId) => {
        setPost({
            ...post,
            comments: post.comments.filter(c => c.id !== commentId)
        });
    }

    return(

        <MainDiv>
            <MainHeader/>
            <PostContainer post={post}></PostContainer>
            <CommentList comments={post.comments} onCommentDeleted={handleCommentDeleted}/>
            <Styledflex>
                <TextInput height="40" value={comment} onChange={(e) => {setComment(e.target.value)}}/>
                <Button title="Upload" type="chat" onClick={() => {writeComment()}}/>
            </Styledflex>
        </MainDiv>
    )
}

export default PostViewPage