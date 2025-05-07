import styled from 'styled-components'
import {useState, useEffect} from 'react'

const CreateButton = styled.button`
    width: auto;
    height: 48px;
    display: flex;
    gap: 20px;
    align-items: center;
    text-align: center;

    font-size: 20px;
    color: #2a2c53;
    background-color: #F8F7F1;
    border-radius: 50px;
    border: solid 1px #2a2c53;
    padding: 6px 32px;

    cursor: pointer;

    &:hover{
        color: white;
        background-color: #2a2c53;
    }
`
// const SellectButton = styled(CreateButton)`
//     width: auto;
//     height: 48px;
//     display: flex;
//     gap: 20px;
//     align-items: center;
//     text-align: center;

//     font-size: 20px;
//     color: #2a2c53;
//     background-color: #F8F7F1;
//     border-radius: 50px;
//     border: solid 1px #2a2c53;
//     padding: 6px 32px;

//     &:hover{
//         color: white;
//         background-color: #2a2c53;
//     }
// `
const UploadButton = styled(CreateButton)`
    width: auto;
    height: 48px;

    font-size: 20px;
    color: #fff;
    background-color: #2a2c53;
    border-radius: 50px;
    border: solid 1px #2a2c53;
    padding: 6px 32px;

    &:hover{
        background-color: #ef6a32;
        border: solid 1px #ef6a32;
    }
`

const ChatButton = styled.button`
    width: 172px;
    height: 75px;

    font-size: 24px;
    color: #fff;
    background-color: #acd3a8;
    border-radius: 8px;
    border: solid 1px #8ab2a6;
    padding: 4px 32px;
    margin-left: 18px;

    cursor: pointer;

    &:hover{
        background-color: #8ab2a6;
    }
`

function Button(props){

    const[createImg, setCreateImg] = useState(false)

    const handleMouseEnter = () => {
        setCreateImg(true);
    };
    
    const handleMouseLeave = () => {
        setCreateImg(false);
    };
    

    const type = props.type || "create"
    if(type == "create"){
        return <CreateButton onClick={props.onClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {props.title || "Button"}
            <img src={createImg ? "/line-arrow-white.png" : "/line-arrow-black.png"} width={"24px"} height={"24px"} alt="" />
        </CreateButton>
    }else if(type == "chat"){
        return <ChatButton onClick={props.onClick}>
            {props.title || "Button"}
        </ChatButton>
    }else if(type == "upload"){
        return <UploadButton onClick={props.onClick}>
            {props.title || "Button"}
        </UploadButton>
    }

}

export default Button

