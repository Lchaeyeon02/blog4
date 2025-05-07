import styled from "styled-components";
import PostItem from "./PostItem";

const StyledWrapper = styled.div`
    display: grid;
    gap: 20px;
`

const NoPostsMessage = styled.div`
    width: 1300px;
    height: 105px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed #DBDBDB;
    border-radius: 8px;
    color: #8AB2A6;
    font-size: 24px;
    font-weight: 400;
    background-color: rgba(172, 211, 168, 0.1);
`

function PostList(props){
    const {posts, itemClicked} = props

    const list = posts.map((post, index)=>{
        return <PostItem key={post.id} post={post} onClick={(e)=>itemClicked(post)}></PostItem>
    })

    return(
        <StyledWrapper>
            {posts.length > 0 ? list : (
                <NoPostsMessage>해당 카테고리에 게시물이 없습니다</NoPostsMessage>
            )}
        </StyledWrapper>
    )
}

export default PostList