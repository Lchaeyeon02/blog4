import styled from "styled-components";
import Button from "./Button";
import PostList from "./PostList.jsx";
// import data from "../data.json"
import {useState, useEffect, useRef} from 'react'
import {db} from '../firebase.js'

import MainHeader from "./MainHeader.jsx";
import { useNavigate } from "react-router-dom";

const MainText = styled.p`
    font-size: 54px;
    text-align: center;
    margin: 185px 0px 42px 0;
    color: #2A2C53;
`

const Colored = styled.span`
  color: #8AB2A6;
  font-weight: bold;
`

const MainDiv = styled.div`
    padding: 50px 80px;
`

const CenteredButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

const MainOption = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin: 90px 0px 40px 0px;
`

const CustomSelect = styled.select`
    background-image: ${props => props.isOpen ? "url('../public/category2-c.png')" : "url('../public/category2.png')"};
    background-size: 97%;

    cursor: pointer;
`

const CustomCategorySelect = styled.select`
    background-image: ${props => props.isOpen ? "url('../public/category-c.png')" : "url('../public/category.png')"};
    background-size: 110%;

    cursor: pointer;
`

function MainPage(props){
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const allData = useRef([]); // 모든 데이터 저장용
    const [value, setValue] = useState('Newest');
    const [cate, setCate] = useState('all');
    const [selectOpen, setSelectOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    useEffect(() => {
        let tempData = [];
        db.collection('post').get().then((qs) => {
            qs.forEach((doc) => {
                tempData.push(doc.data());
            });
            
            tempData.sort((a, b) => b.id - a.id);
            allData.current = tempData.slice();
            
            setData(tempData);
        });
    }, []);

    // useEffect(() => {
    //     db.collection('post').get().then((qs) => {
    //         qs.forEach((doc) => {
    //             allData.current.push(doc.data());
    //         });
            
    //         allData.current = allData.current.sort((a, b) => b.id - a.id);
    //         let tempData = allData.current.slice();

    //         setData(tempData);
    //     });
    // }, []);

    function handleChange(e) {
        setValue(e.target.value);
        
        const sortedData = data.slice();
        
        if (e.target.value === 'Newest') {
            sortedData.sort((a, b) => b.id - a.id);
        } else {
            sortedData.sort((a, b) => a.id - b.id);
        }
        
        setData(sortedData);
    }


    function cateChange(e) {
        setCate(e.target.value);
        
        let filteredData;
        
        if (e.target.value === 'all') {
            filteredData = allData.current.slice();
        } else {
            filteredData = allData.current.filter(function(post) {
                return post.category === e.target.value;
            });
        }
        
        setData(filteredData);
    }

    function handleSelectClick() {
        setSelectOpen(!selectOpen);
    }

    function handleCategoryClick() {
        setCategoryOpen(!categoryOpen);
    }

    return(
        <MainDiv>
            <MainHeader/>

            <MainText>Make a note of <Colored>your day.</Colored></MainText>
            <CenteredButtonWrapper>
                <Button title="Create a new post" onClick={(e)=>{navigate(`/write`)}}></Button>
            </CenteredButtonWrapper>

            <MainOption>
                <CustomSelect className="select-btn" value={value} onChange={handleChange} onClick={handleSelectClick} isOpen={selectOpen}>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </CustomSelect>
                <CustomCategorySelect className="select-btn2" value={cate} onChange={cateChange} onClick={handleCategoryClick} isOpen={categoryOpen}>
                    <option value="all">all</option>
                    <option value="daily">daily</option>
                    <option value="travel">travel</option>
                    <option value="food">food</option>
                    <option value="hobby">hobby</option>
                    <option value="exercise">book</option>
                    <option value="study">study</option>
                </CustomCategorySelect>
            </MainOption>
            <PostList posts={data} itemClicked={(post)=>{navigate(`/post/${post.id}`)}}></PostList>
            
        </MainDiv>
    )
}

export default MainPage