import React from "react";
import { View, Text } from "react-native";
import { styled } from "styled-components/native";
import RadioGroup from 'react-native-radio-buttons-group';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const getColor = (type, elem) => {
    switch (type){
        case "activity":
            if (elem === "date") return "#B9C6B2;"
            return '#9FC68B;'
        case "task":               
            return '#F7CA88;'
        default:
            if (elem === "date") return "#F7C5B9;"
            return '#F79E88;'        
    }
}

const getBorderRadius = (isTask) => {
    if(isTask) return '10px 10px 0 0;'
    return '10px 0 0 0;'
}

const getWidth = (isTask) => {
    if(isTask) return '100%;'
    return '60%;'
}

const SItemTypeSelectorContainer = styled(View)`
    background-color: #ffffff; 
    border-radius: 14px;
    padding: 10px;
`

const SItemPicker = styled(RadioGroup)`
    
`

const SItemContainer = styled(View)`
    
`
const SItemTitleContainer = styled(View)`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
`
const SItemTitle = styled(Text)`
    padding: 10px 15px;
    border-radius: ${({isTask}) => getBorderRadius(isTask)}
    background-color: ${({type}) => getColor(type, "title")}
    width: ${({isTask}) => getWidth(isTask)}
    `
const SItemDate = styled(Text)`
    border-radius: 0 10px 0 0;
    background-color: ${({type}) => getColor(type, "date")}
    padding: 10px 15px;
    width: 40%;
`
const SItemDescription = styled(Text)`
    font-size: 14px;
    max-height: 50px;
    padding: 5px 15px;
    background: #ffffff;
    `
const SItemMore = styled(Text)`
    border-radius: 0 0 10px 10px;
    padding: 0 15px 10px 15px;
    background: #ffffff;
    text-align: right;
    color: ${({type}) => getColor(type, "title")}
    text-decoration: underline;
`
const SITemCheckd = styled(BouncyCheckbox)`
    position: absolute;
    top: 25px;
    right: 0px;

`
const SEventTitleCont = styled(View)`
    background: ${({type}) => getColor(type, "event")}
    border-radius: 10px;
`
const SEventTitle = styled(Text)`
    color: #ffffff;
    margin: 3% auto;
    font-weight: 600;
    font-size: 18px;
`
const SEventDateCont = styled(View)`
    background: ${({type}) => getColor(type, "date")}
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    justify-content: center;
`

const SEventDateDisplay = styled(Text)`
    color: #3D3D3D;
    font-weight: 600;
`
const SEventDescDisplay = styled(Text)`
    background: #ffffff;
    padding: 15px;
    font-size: 16px;
    max-height: 250px;
    height: 250px;
    border-radius: 0 0 10px 10px;
`


export {
        SEventDescDisplay,
        SEventDateDisplay,
        SEventDateCont,
        SEventTitleCont,
        SEventTitle,
        SITemCheckd,
        SItemMore,
        SItemDescription,
        SItemDate,
        SItemTitle,
        SItemTitleContainer, 
        SItemPicker, 
        SItemTypeSelectorContainer, 
        SItemContainer}