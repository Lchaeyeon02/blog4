import styled from "styled-components";
import { useState } from "react";
import {db} from '../firebase.js'

import Button from "./Button";
import TextInput from "./TextInput.jsx";
import CategoryBox from "./CategoryBox.jsx";

import MainHeader from "./MainHeader.jsx";
import { useNavigate } from "react-router-dom";

const MainDiv = styled.div`
    padding: 50px 80px;
`
const BoxDiv = styled.div`
    display: grid;
    gap: 24px;
`
const MainInner = styled.div`
    display: grid;
    gap: 52px;
`
const ButtonBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 117px;
    margin-bottom: 45px;
`

function PostWritePage(props){

    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('')

    const writePost = ()=>{
        let timestamp = new Date().getTime().toString()
        db.collection('post').doc(timestamp).set({
            id: timestamp,
            title: title,
            content: content,
            comments: [],
            date: timestamp,
            category: category
        }).then(()=>{
            alert('글이 등록되었습니다!')
            navigate('/')
        })
    }

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    }

    return(
        <MainDiv>
            <MainHeader/>
            <ButtonBox>
                <a href=""> <img width="48px" height="48px" src="../public/back.png" alt=""  onClick={()=>{navigate(`/main`)}} /> </a>
                <Button title="Upload" type = "upload" onClick={(e)=>{writePost()}}></Button>
            </ButtonBox>

            <MainInner>
                <BoxDiv>
                    <label className="labelCss" htmlFor="">category</label>
                    <CategoryBox onChange={handleCategoryChange}/>
                </BoxDiv>
                <BoxDiv>
                    <label className="labelCss" htmlFor="">title</label>
                    <TextInput height="75" value={title} onChange={(e)=>setTitle(e.target.value)}></TextInput>
                </BoxDiv>
                <BoxDiv>
                    <label className="labelCss" htmlFor="">content</label>
                    <TextInput height="450" value={content} onChange={(e)=>setContent(e.target.value)}></TextInput>
                </BoxDiv>
            </MainInner>
        </MainDiv>
    )
}

export default PostWritePage