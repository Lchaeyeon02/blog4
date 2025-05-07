import styled from "styled-components";
import CommentItem from "./CommentItem";

const StyledWrapper = styled.div`
    display: grid;
    gap: 16px;
    margin-bottom: 32px;
`

const StyledTItle = styled.p`
    font-size: 24px;
    font-weight: bold;
    color: #8AB2A6;
    margin: 0px;
`

const DivFlex = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
`

const DivFlex2 = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;
`

const DivFlex3 = styled.div`
    position : fixed;
    bottom : 0;
`

function CommentList(props){
    const {comments, onCommentDeleted }=props

    const list = comments.map((comment, index)=>{
        return <CommentItem key={comment.id} comment={comment} onDeleteComment={onCommentDeleted}></CommentItem>
    })

    return (
        <div>
            <DivFlex2>
                <StyledTItle>Comment</StyledTItle>
                <DivFlex>
                    <img width="40px" height="40px" src="../public/green-chat.png" alt=""/>
                    <StyledTItle>
                        {comments ? comments.length : 0}
                    </StyledTItle>
                </DivFlex>
            </DivFlex2>

            <StyledWrapper>
                {list}
            </StyledWrapper>
        </div>
    )
}

export default CommentList