import styled from "styled-components";
import Button from "./Button.jsx";
import {useState, useEffect} from 'react'
import {db} from '../firebase.js'

const CategoryItem  = styled.button`
    width: auto;
    height: 51px;
    border-radius: 50px;
    font-size: 24px;
    background-color: ${props => props.selected ? "#acd3a8" : "#fff"};
    color: ${props => props.selected ? "#fff" : "2a2c53"};
    border: solid 1px ${props => props.selected ? "#8ab2a6" : "#C4C4C4"};
    padding: 4px 32px;

    cursor: pointer;

    &:hover{
        color: #fff;
        background-color: #acd3a8;
        border: solid 1px #8ab2a6;
    }
`

const CateArrow = styled.div`
    display: flex;
    gap: 20px
`

function CategoryBox(props){
    const categories = ["daily", "travel", "food", "hobby", "book", "study"];
    const [selectedCategory, setSelectedCategory] = useState("daily");
    
    useEffect(() => {
        if (props.onChange) {
            props.onChange("daily");
        }
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        
        if (props.onChange) {
            props.onChange(category);
        }
    }

    return(
        <CateArrow>
            {categories.map((category, index) => (
                <CategoryItem  key={index} selected={selectedCategory === category} onClick={() => handleCategoryClick(category)}>
                    {category}
                </CategoryItem>
            ))}
        </CateArrow>
    )
}

export default CategoryBox