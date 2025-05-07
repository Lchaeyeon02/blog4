import styled from 'styled-components'
import Button from "./Button";
import PostItem from './PostItem';
import { useNavigate, useParams } from "react-router-dom";
import { db } from '../firebase.js'

const StyledWrapper = styled.div`
    display: block;
    width: 1300px;
    margin-bottom: 110px;
`

const StyledTitle = styled.h3`
    color: #3E3F5B;
    font-size: 32px;
    margin: 0px;
`

const StyledContent = styled.p`
    background-color: white;
    border: 1px solid #8AB2A6;
    border-radius: 8px;
    padding: 50px;
    line-height: 180%;
    font-size: 24px;
    margin: 0px;
`

const StyledFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 117px;
    margin-bottom: 45px;
`

const DateP = styled.p`
    color: #8AB2A6;
    font-size: 20px;
    margin: 40px 0 0 0;

`

function PostContainer(props){
    const {post} = props
    const { id: postId } = useParams();
    const navigate = useNavigate();

    const deletePost = ()=>{
        db.collection('post').doc(postId).delete().then(()=>{
            alert('게시물이 삭제되었습니다.')
            navigate('/main');
        })
    }

    const formatDate = (timestamp) => {
        let dateValue = timestamp;
        
        if (!dateValue) return "날짜 정보 없음";
        
        const date = new Date(Number(dateValue));
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        
        return `${year}.${month}.${day}`;
    }


    return (
        <StyledWrapper>
            <ButtonBox>
                <StyledFlex>
                    <a href=""> <img width="48px" height="48px" src="../public/back.png" alt=""  onClick={()=>{navigate(`/main`)}} /> </a>
                    <StyledTitle>{post.title}</StyledTitle>
                    <b className='cateB'>{post.category}</b>
                </StyledFlex>
                <Button title="Delete" type = "upload" onClick={(e)=>{deletePost()}}></Button>
            </ButtonBox>
            
            <StyledContent>
                {post.content}
                <DateP>{formatDate(post.timestamp || post.createdAt || post.date)}</DateP>
            </StyledContent>
        </StyledWrapper>
    )
}

export default PostContainer

