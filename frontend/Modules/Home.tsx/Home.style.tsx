import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-grow: 1;
    flex-direction: column;
    height: 100vh;
    width:100%;
    padding:0px;
    margin: 0px;
    background-color: #E4A5FF;
`

const Header = styled.div`
    height: 150px;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items:center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 25px;
    font-weight: 500;
`

const Content = styled.div`
    flex: 1;
    display:flex;
    justify-content: center;
    
`

const ButtonList = styled.button`
    height: 80px;
    width: 100px;
    border-radius: 5px;
    background-color: #116A7B;
    transition: 0.3s;
    cursor: pointer;
    border: 0;
    margin-right: 15px;
    color:#ffffff;

    :hover{
        background-color: #1494ad;
        color:#000;
    }
`

const ButtonCadastrar = styled.button`
    height: 80px;
    width: 100px;
    border-radius: 5px;
    background-color: #CDC2AE;
    transition: 0.3s;
    cursor: pointer;
    border: 0;
    color:#ffffff;
    :hover{
        background-color: #ECE5C7;
        color:#000;
    }
`

export {
    Container,
    Content,
    Header,
    ButtonList,
    ButtonCadastrar
}