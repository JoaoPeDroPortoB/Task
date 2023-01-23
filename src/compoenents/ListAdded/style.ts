

import styled from "styled-components";

type ContainerProps = {
    DoOrNot: boolean;
}

export const Container = styled.div(({ DoOrNot }: ContainerProps) => (
    `
display:flex;
align-items:center;
max-width:1280px;
height:40px;
justify-content:center  ;
margin:10px auto;
border: 1px solid black;
border-radius:15px;


input{
    width:50px;
    height:22px;
    margin-right:5px;
}
label{
    text-decoration: ${DoOrNot ? 'line-through' : 'initial'}
}

    `
));

export const Input = styled.div`
    display: flex;
    flex: 2;
`

export const Button = styled.div`
    display: flex;
    flex:1;
    justify-content: flex-end;
    align-items: center;
    margin-right: 10px;
`