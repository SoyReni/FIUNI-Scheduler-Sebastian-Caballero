import React from "react";
import { View, Text, Pressable } from "react-native";
import { styled } from "styled-components/native";

const SDashCardContainer = styled(Pressable)`
    background: #fff;
    margin: 0 5% 5% 5%;
    border-radius: 10px;
`

const SDashCardTitle = styled(View)`
    background: #2C448E;
    padding: 2% 5%;
    border-radius: 10px 10px 0 0;
    display: flex; 
    align-items: center;
` 
const SDashCardContent = styled(View)`
    padding: 2% 5%; 
`

const STitleText = styled(Text)`
    color: #fff; 
    font-weight: 900;
`

export {SDashCardContainer, SDashCardTitle, SDashCardContent, STitleText}