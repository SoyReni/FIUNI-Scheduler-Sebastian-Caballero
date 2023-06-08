import React from "react";
import { Image, View, Text } from "react-native";
import {Header} from 'react-native-elements';
import  styled  from "styled-components/native";

const StyledLogo = styled.Image` 
    width: 300px;
    resize-mode: contain;
`;

const StyledHeader = styled.View`
    padding: 20px;
    align-items: center;
    background: #EEEEEEE;
`;


const Head = () => {
    return (<StyledHeader>
        <StyledLogo source={require('../assets/logo.png')}></StyledLogo>
    </StyledHeader>)
}

const MyHeader = () => {
    return (<><Header
        centerComponent={Head}
        backgroundColor="#ffffff"
    ></Header></>)
}

export default MyHeader; 
