import styled from "styled-components";

const HeaderContainer = styled.div`
    width: auto;
    height: auto;
    color: #2A2C53;

`
const HeaderInner = styled.div`
    width: auto;
    height: auto;
    color: inherit;
    text-decoration: none;
    display: flex;
    justify-content: flex-end;
    gap: 40px;

`
const Nav = styled.a`
    font-size: 18px;
    margin: 0px 0px;
    padding: 0px;
    color: #2A2C53;
    text-decoration: none;
    &:hover{
        color: #ACD3A8;
    }
`

function MainHeader(props){
    return(
        <HeaderContainer>
            <HeaderInner>
                <Nav href="">message</Nav>
                <Nav href="">neighbor</Nav>
                <Nav href="">mypage</Nav>
                <Nav href="">welcome, <b>Lee!</b></Nav>
            </HeaderInner>
        </HeaderContainer>
    )
}

export default MainHeader