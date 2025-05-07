import styled from 'styled-components'
import "../App.css"
import {useState, useEffect} from 'react'

const StyledWrapper = styled.div`
    color: #2A2C53;
    background-color: white;
    width: 1300px;
    height: 105px;

    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 2px solid #DBDBDB;
    border-radius: 8px;
    padding: 0px 60px;
    &:hover{
        color: white;
        background-color: #ACD3A8;
        border: 2px solid #8AB2A6;
        transition: 0.2s all ease-in-out;
    }
    box-sizing: border-box;
`
const PIdatetiltle = styled.div`
    display: flex;
    align-items: center;
    gap: 150px;
`

const StyledTitle = styled.p`
    font-size: 24px;
`

const PIdate = styled.div`
    height: 99px;
    display: block;
    padding-top: 6px;
`
const PIdatecate = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
`

const PIchat = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
`
    
function PostItem(props){
    const {post, onClick} = props

    const formatDate = (timestamp) => {
        if (!timestamp) return { day: "N/A", yearMonth: "N/A" };
        
        const date = new Date(parseInt(timestamp));
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear().toString().slice(-2);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        
        return {
            day: day,
            yearMonth: `${year}/${month}`
        };
    }
    const dateInfo = formatDate(post.date);


    const[chatImg, setChatImg] = useState(true)

    const handleMouseEnter = () => {
        setChatImg(false);
    };
    
    const handleMouseLeave = () => {
        setChatImg(true);
    };

    return (
        <StyledWrapper onClick={onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <PIdatetiltle>
                <PIdate>
                    <p className='PIdateday'>{dateInfo.day}</p>
                    <p className='PIdateyear'>{dateInfo.yearMonth}</p>
                </PIdate>
                <StyledTitle>{post.title}</StyledTitle>
            </PIdatetiltle>
            <PIdatecate>
                <b>{post.category}</b>
                <PIchat>
                    <img width={'30px'} height={'30px'} src={chatImg ? "/chat02.png" : "/chat01.png"} alt="" />
                    <p className='PIchatnum'>{post.comments ? post.comments.length : 0}</p>
                </PIchat>
            </PIdatecate>
        </StyledWrapper>
    )
}

export default PostItem

