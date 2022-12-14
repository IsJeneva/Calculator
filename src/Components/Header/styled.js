import styled from "styled-components"

export const WrapperHeader = styled.div`
max-width: 800px; 
width: 100%;
min-height: 50px;
max-height: 100px;
background-color:#434343;
`

export const Wrapper = styled.div`
    width:90%;
    min-height: 50px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;  
`
export const NameCalculatorApp = styled.p`
    color: white;
    margin: 0;
    height: 30px;
    font-size: 20px;
    line-height:30px;
`

export const LinkHeader = styled.button`
    max-width: 250px;
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    border: none;
    outline: none;
    height: 30px;  
    // border: 1px solid red;
    background-color:#434343;
    color: white;
    font-size: 16px;
`
export const Link = styled.p`
    color: #ffffff;
`

export const BtnHome = styled.button`
    width: 40px;
    border: 1px solid red;
`

export const BtnSetting = styled.button`
    width: 40px;
    border: 1px solid red;
`