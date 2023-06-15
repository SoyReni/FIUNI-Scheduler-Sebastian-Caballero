import React from "react";
import { View, Text, Pressable, ScrollView, TextInput, Button } from "react-native";
import { styled } from "styled-components/native";

const handleColor = (type) => {
    switch (type){
        case "activity":
            return '#9FC68B'
        case "task":
            return '#F7CA88'
        default:
            return '#F79E88'        
    }
}

const handleType = (type, border) => {
    switch(type){
        case "task":
            if (border) return "8px;"
            return "100%;"
        default: 
            if (border) return "0 8px 8px 0;"
            return "75%;"
    }
}

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
const SDashCardContent = styled(ScrollView)`
    padding: 3% 5%;
`

const STitleText = styled(Text)`
    color: #fff; 
    font-weight: 900;
`

const SDahsItem = styled(View)`
    display: flex; 
    flex-direction: row;
    margin: 2px 0;
`

const SDahsItemDate = styled(View)`
    background: ${({ type }) => handleColor(type)} ;
    padding: 3px 12px;
    border-radius: 8px 0 0 8px;
    width: 25%;
    flex-direction: row;
`

const SDashDate = styled(Text)`
    color: #fff;
    margin: auto 2px;
    font-size: 15px;
    font-weight: 600;
`
const SDahsItemInfoContainer = styled(View)`
    background: #f0f0f0;
    width: ${({ type }) => handleType(type, false)}
    border-radius: ${({ type }) => handleType(type, true)}
`

const SDashItemInfo = styled(Text)`
    margin: auto 10px;
    font-size: 17px;
`

const SVerTodos = styled(Text)`
    color: #2C448E;
    font-size: 17px;
    text-align: right;
    margin: -1% 5% 3% 3%;
`

const SInput = styled(TextInput)`
    border-color: #f1f1f1;
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    padding: 5px 10px;
    margin-bottom: 3%;
    font-size: 16px;
`
const SDateSelect = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`
const SDateText = styled(Text)`
    width: 50%;
    padding: 2%;
    font-size: 16px;
    margin: 0 auto;
    border-color: #f1f1f1;
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
`
const SDateButton = styled(Text)`
    width: 50%;
    border-radius: 10px;
    background-color: #2C448E;
    color: #ffffff;
    text-align: center;
    padding: 7px 0;
    font-size: 16px;
    font-weight: 600;
` 
const SSubmit = styled(Text)`
    background: #F7CA88;
    border-radius: 10px;
    width: 27%;
    text-align: center;
    padding: 25px 0;
    font-size: 16px;
    font-weight: 600;
`

const SDateSearch = styled(View)`
    display: flex;
    flex-direction: row;
    gap: 10px;
`
const SDateInputs = styled(View)`
    width: 70%;
`

const Separator = styled(View)`
    height: 40px;
`

export {Separator, SDateInputs, SDateSearch, SSubmit, SDateButton, SDateText, SDateSelect, SInput, SVerTodos, SDahsItemInfoContainer, SDashItemInfo, SDashDate, SDashCardContainer, SDashCardTitle, SDashCardContent, STitleText, SDahsItem, SDahsItemDate}