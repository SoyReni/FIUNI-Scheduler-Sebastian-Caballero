import React from "react";
import { Text, TextInput, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styled } from "styled-components/native";

const getSelected = (isSelected) => {
    if(isSelected === "") return '#c3c3c3;'
    return '#000000;'
}

const getColor = (type) => {
    switch (type){
        case "activity":
            return '#9FC68B'
        case "task":
            return '#F7CA88'
        default:
            return '#F79E88'        
    }
}

const getBorderColor = (error) => {
    if (!error) return "#f1f1f1"
    else return "#ff0000"
}

const SInputGroup = styled(View)`

`
const SInput = styled(TextInput)`
    border-color: ${({error}) => getBorderColor(error)};
    border-style: solid;
    text-align: left;
    background-color: #ffffff;
    border-width: 1px;
    border-radius: 15px;
    padding: 5px 10px;
    margin-bottom: 4%;
    font-size: 16px;
    width: 80%;
    margin: 10px auto;
`
const SDateText = styled(Text)`
    width: 80%;
    padding: 5px 10px;
    font-size: 16px;
    margin: 0 auto;
    text-align: left;
    background: #ffffff;
    border-color: ${({error}) => getBorderColor(error)};
    border-style: solid;
    border-width: 1px;
    border-radius: 15px;
    color: ${({isSelected}) => getSelected(isSelected)}
`

const SInputLabel = styled(Text)`
    width: ${({w})=>w || "20%"};
    font-size: 16px;
    font-weight: 600;
    margin-top: 3%;
    margin-bottom: 1%;
`


const SITemCheckd = styled(BouncyCheckbox)`
    margin: 0;
`

const SSubmit = styled(Text)`
    background: ${({type}) => getColor(type)};
    margin-top: 20px;
    border-radius: 15px;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
    font-weight: 600;
`

export {SSubmit, SITemCheckd, SInputLabel, SDateText, SInput, SInputGroup}